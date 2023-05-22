const { createApp } = Vue

createApp({
  data() {
    return {
      contador: 0
    }
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

