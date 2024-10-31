module.exports = () => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        "nhom-tinh-cach": {
          field: "slug",
          references: "type",
        },
      },
    },
  },
});
