const { parseMultipartData, sanitizeEntity } = require("@strapi/utils");

module.exports = {
  async getAnswerTypes(ctx) {
    const { answers } = ctx.request.body;

    // Kiểm tra tính hợp lệ của payload
    if (!answers || typeof answers !== "object") {
      return ctx.badRequest("Invalid data");
    }

    // Khởi tạo đối tượng để đếm tần suất cho mỗi đặc điểm
    const frequency = {
      E: 0,
      I: 0,
      S: 0,
      N: 0,
      T: 0,
      F: 0,
      J: 0,
      P: 0,
    };

    // Đếm tần suất của từng đặc điểm trong câu trả lời
    Object.values(answers).forEach((answer) => {
      if (frequency.hasOwnProperty(answer)) {
        frequency[answer]++;
      }
    });

    // Chọn ra đặc điểm có tần suất cao nhất trong mỗi cặp
    const result = {
      E_I: frequency.E >= frequency.I ? "E" : "I",
      N_S: frequency.N >= frequency.S ? "N" : "S",
      T_F: frequency.T >= frequency.F ? "T" : "F",
      P_J: frequency.P >= frequency.J ? "P" : "J",
    };

    // Sắp xếp lại các ký tự MBTI theo thứ tự yêu cầu
    const mbti = [
      result.E_I, // Ký tự thứ nhất: I hoặc E
      result.N_S, // Ký tự thứ hai: N hoặc S
      result.T_F, // Ký tự thứ ba: T hoặc F
      result.P_J, // Ký tự thứ tư: P hoặc J
    ].join("");

    // Trả về kết quả là một chuỗi MBTI
    return { mbti };
  },
  async getSimpleAnswerType(ctx) {
    const { answers } = ctx.request.body;

    // Kiểm tra tính hợp lệ của payload
    if (!answers || !Array.isArray(answers) || answers.length !== 4) {
      return ctx.badRequest("Invalid data: Must provide exactly 4 answers.");
    }

    // Tạo một object để lưu trữ thứ tự đúng của các ký tự MBTI
    const mbtiOrder = {
      E: "I",
      I: "I",
      S: "S",
      N: "N",
      T: "T",
      F: "F",
      P: "P",
      J: "J",
    };

    // Sắp xếp các ký tự MBTI theo đúng thứ tự
    const mbti = [
      answers.find((char) => char === "E" || char === "I") || "I", // Ký tự thứ nhất: I hoặc E
      answers.find((char) => char === "N" || char === "S") || "S", // Ký tự thứ hai: N hoặc S
      answers.find((char) => char === "T" || char === "F") || "T", // Ký tự thứ ba: T hoặc F
      answers.find((char) => char === "P" || char === "J") || "J", // Ký tự thứ tư: P hoặc J
    ].join("");

    // Trả về kết quả là một chuỗi MBTI
    return { mbti };
  },
};
