var app = Vue.createApp({
  data() {
    return {
      counter: 0,
      isNegative: false,
    };
  },
  methods: {
    increment() {
      this.counter++;
      this.isNegative = this.counter < 0;
    },
    decrement() {
      this.counter--;
      this.isNegative = this.counter < 0;
    }
  }
});
app.mount("#app");