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
            "Final Estimation Proposals will be attached to the original Quotation",
          answers: { a: "Task", b: "Contact", c: "Dashboard", d: "Account" },
          correctAnswer: "a",
        },
        {
          question: "Net Sales and Order Entry Information is found on the ______ in Salesforce.",
          answers: { a: "Customer Service Dashboard", b: "SAP Customer", c: "Sales Funnel Dashboard", d: "All of above" },
          correctAnswer: "d",
        },
        {
          question:
            "The sales force can play a central role in achieving a marketing orientation strategy, by Collecting and disseminating market information",
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
