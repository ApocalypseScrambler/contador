const { createApp } = Vue

createApp({
  data() {
    return {
      contador: 0
    }
  },
  created() {
    this.sumar(),
      this.restar()
  },
  methods: {
    sumar() {
      return this.contador++
    },

    restar() {
      return this.contador--
    },
  }
}).mount('#app')

