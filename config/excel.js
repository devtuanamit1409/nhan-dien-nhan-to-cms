// config/excel.js
module.exports = {
  config: {
    "api::thong-tin-ung-vien.thong-tin-ung-vien": {
      // UID của collection type
      columns: [
        "type", // Tên cột muốn xuất
        "name",
        "address",
        "email",
        "age",
        "phone",
        "birthDate",
        "position",
        "Tags",
      ],
      relation: {}, // Không có quan hệ nào trong collection này, nên để trống
      locale: "false", // Đặt "false" vì không có cấu hình i18n
    },
  },
};
