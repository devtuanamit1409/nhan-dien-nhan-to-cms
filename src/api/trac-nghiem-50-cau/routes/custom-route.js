module.exports = {
  routes: [
    {
      method: "POST",
      path: "/trac-nghiem-50-cau/get-answer-types",
      handler: "custom-controller.getAnswerTypes",
      config: {
        policies: [],
      },
    },
    {
      method: "POST",
      path: "/cau-hoi-dang-2/get-answer-types",
      handler: "custom-controller.getSimpleAnswerType",
      config: {
        policies: [],
      },
    },
  ],
};
