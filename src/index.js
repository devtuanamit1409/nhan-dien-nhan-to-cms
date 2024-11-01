"use strict";
const path = require("path");
const xlsx = require("xlsx");
const fs = require("fs");
module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap() {
    strapi.db.lifecycles.subscribe({
      models: ["plugin::upload.file"], // Đăng ký lifecycle cho Media Library
      async afterCreate(event) {
        const { result } = event;

        if (
          result.mime ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        ) {
          try {
            const filePath = path.join(strapi.dirs.static.public, result.url);
            const workbook = xlsx.readFile(filePath);
            const sheetName = workbook.SheetNames[0];
            const sheetData = xlsx.utils.sheet_to_json(
              workbook.Sheets[sheetName]
            );

            for (const row of sheetData) {
              try {
                // Xử lý `phone` và `age`
                const phone = row.phone ? String(row.phone) : "";
                const age = row.age ? parseInt(row.age, 10) : null;

                // Xử lý `birthDate` để chuyển về dạng chuỗi DD-MM-YYYY
                let birthDate = "";
                if (row.birthDate) {
                  if (typeof row.birthDate === "number") {
                    const dateObj = new Date(
                      (row.birthDate - 25569) * 86400 * 1000
                    ); // Excel serial to Date
                    birthDate = `${String(dateObj.getDate()).padStart(
                      2,
                      "0"
                    )}-${String(dateObj.getMonth() + 1).padStart(
                      2,
                      "0"
                    )}-${dateObj.getFullYear()}`;
                  } else if (row.birthDate instanceof Date) {
                    birthDate = `${String(row.birthDate.getDate()).padStart(
                      2,
                      "0"
                    )}-${String(row.birthDate.getMonth() + 1).padStart(
                      2,
                      "0"
                    )}-${row.birthDate.getFullYear()}`;
                  } else if (typeof row.birthDate === "string") {
                    // Nếu là chuỗi, kiểm tra và chuẩn hóa định dạng
                    const parsedDate = new Date(row.birthDate);
                    if (!isNaN(parsedDate)) {
                      birthDate = `${String(parsedDate.getDate()).padStart(
                        2,
                        "0"
                      )}-${String(parsedDate.getMonth() + 1).padStart(
                        2,
                        "0"
                      )}-${parsedDate.getFullYear()}`;
                    } else {
                      birthDate = row.birthDate; // Giữ nguyên nếu không chuyển đổi được
                    }
                  }
                }

                // Lưu dữ liệu vào collection
                await strapi.entityService.create(
                  "api::thong-tin-ung-vien.thong-tin-ung-vien",
                  {
                    data: {
                      type: row.type || "",
                      name: row.name || "",
                      address: row.address || "",
                      email: row.email || "",
                      age: age,
                      phone: phone,
                      birthDate: birthDate,
                      position: row.position || "",
                      Tags: row.Tags || "Chưa Đặt Lịch",
                      publishedAt: new Date(),
                    },
                  }
                );
              } catch (rowError) {
                strapi.log.error(
                  `Error saving row data to database: ${JSON.stringify(
                    row
                  )} - ${rowError.message}`
                );
              }
            }

            strapi.log.info(
              "Excel file processed and data saved successfully."
            );
          } catch (error) {
            strapi.log.error("Error processing Excel file:", error.message);
          }
        } else {
          strapi.log.warn("Uploaded file is not an Excel file.");
        }
      },
      async afterUpdate(event) {
        // Thực hiện logic sau khi file được cập nhật
        console.log("File updated:", event.params.data);
      },
      async afterDelete(event) {
        // Thực hiện logic sau khi file bị xóa
        console.log("File deleted:", event.params.where);
      },
    });
  },
};
