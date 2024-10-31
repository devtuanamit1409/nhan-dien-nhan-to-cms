// const pdf = require("pdf-parse");
// const fs = require("fs");
// const path = require("path");

// module.exports = {
//   async afterCreate(event) {
//     const { result } = event;

//     // Trì hoãn xử lý để đảm bảo cv được liên kết
//     setTimeout(async () => {
//       try {
//         // Truy vấn lại bản ghi với populate
//         const record = await strapi.entityService.findOne(
//           "api::thong-tin-ung-vien.thong-tin-ung-vien",
//           result.id,
//           {
//             populate: { cv: true },
//           }
//         );

//         if (record.cv && record.cv.url) {
//           // Đường dẫn đến file CV
//           const filePath = path.join(strapi.dirs.static.public, record.cv.url);

//           // Đọc file PDF thành buffer
//           const fileBuffer = fs.readFileSync(filePath);

//           // Chuyển đổi PDF thành text
//           const pdfData = await pdf(fileBuffer);
//           const textContent = pdfData.text;
//           const currentYear = new Date().getFullYear();
//           // Gọi các hàm trích xuất thông tin từ nội dung PDF
//           const name = extractName(textContent) || "Không tìm thấy tên";
//           const address =
//             extractAddress(textContent) || "Không tìm thấy địa chỉ";
//           const email = extractEmail(textContent) || "Không tìm thấy email";
//           const ageString = extractYearOfBirth(textContent) || "No age";
//           const yearBirth = parseInt(ageString);
//           const age = currentYear - yearBirth;

//           // Cập nhật lại bản ghi với thông tin từ file CV
//           await strapi.entityService.update(
//             "api::thong-tin-ung-vien.thong-tin-ung-vien",
//             result.id,
//             {
//               data: { name, address, email, age },
//             }
//           );

//           strapi.log.info(
//             "PDF content processed and data updated successfully."
//           );
//         } else {
//           strapi.log.warn("No CV file available for processing.");
//         }
//       } catch (error) {
//         strapi.log.error("Error processing PDF file:", error);
//       }
//     }, 2000); // Trì hoãn 2 giây để đảm bảo file cv đã được lưu
//   },
// };

// // Các hàm trích xuất thông tin từ text PDF
// function extractName(text) {
//   const nameRegex1 = /^[A-Z][a-zA-Z\s]*$/m;
//   const nameRegex2 = /(?:Full name|Name|Họ và tên):\s*([A-Za-z\s]+)/i;

//   let match = text.match(nameRegex2);
//   if (match) {
//     return match[1].trim();
//   }

//   match = text.match(nameRegex1);
//   return match ? match[0].trim() : null;
// }

// function extractAddress(text) {
//   const addressRegex = /Address:\s*([\w\s,]+)/i;
//   const match = text.match(addressRegex);
//   return match ? match[1].trim() : null;
// }

// function extractEmail(text) {
//   const emailRegex = /Email:\s*([^\s]+)/i;
//   const match = text.match(emailRegex);
//   return match ? match[1].trim() : null;
// }

// function extractYearOfBirth(text) {
//   const dobRegex = /Date of birth:\s*\w+\s+\d{1,2},\s+(\d{4})/i;
//   const match = text.match(dobRegex);

//   // Nếu tìm thấy, trả về năm, nếu không trả về null
//   return match ? match[1] : null;
// }
