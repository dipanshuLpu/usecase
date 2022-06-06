const app = Vue.createApp({
  data() {
    return {
      idx: 0,
      selectedAnswer: "",
      correctAnswers: 0,
      wrongAnswers: 0,
      count: 3,
      questions: [
        {
          question:
            "Q1",
          answers: { a: "a", b: "b", c: "c", d: "d" },
          correctAnswer: "b",
        },
        {
          question: "Q2",
          answers: { a: "a", b: "b", c: "c", d: "d" },
          correctAnswer: "d",
        },
        {
          question:
            "Q3",
          answers: { a: "True", b: "False" },
          correctAnswer: "b",
        },
      ],
    };
  },
  methods: {
    answered(e) {
      this.selectedAnswer = e.target.value;
      if (this.selectedAnswer == this.questions[this.idx].correctAnswer) {
        this.correctAnswers++;
      } else {
        this.wrongAnswers++;
      }
    },
    nextQuestion() {
      this.idx++;
      this.selectedAnswer = "";
      document.querySelectorAll("input").forEach((el) => (el.checked = false));
    },
    showResults() {
      this.idx++;
    },
    resetQuiz() {
      this.idx = 0;
      this.selectedAnswer = "";
      this.correctAnswers = 0;
      this.wrongAnswers = 0;
    },
  },
});

app.mount("#app");
