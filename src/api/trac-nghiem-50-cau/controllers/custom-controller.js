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
    const result = [
      frequency.E >= frequency.I ? "E" : "I",
      frequency.S >= frequency.N ? "S" : "N",
      frequency.T >= frequency.F ? "T" : "F",
      frequency.J >= frequency.P ? "J" : "P",
    ];

    // Trả về kết quả là một chuỗi MBTI
    return { mbti: result.join("") };
  },
  async getSimpleAnswerType(ctx) {
    const { answers } = ctx.request.body;

    // Kiểm tra tính hợp lệ của payload
    if (!answers || !Array.isArray(answers) || answers.length !== 4) {
      return ctx.badRequest("Invalid data: Must provide exactly 4 answers.");
    }

    // Ghép 4 ký tự đáp án thành chuỗi MBTI
    const mbti = answers.join("");

    // Trả về kết quả là một chuỗi MBTI
    return { mbti };
  },
};
