const { createApp } = Vue

createApp({
  data() {
    return {
      contador: 0,
      botones: false,
      textoboton: "Mostrar controles"
    }
  },
  methods: {
    mostrar() {
      if (this.botones == true) {
        this.botones = false
        this.textoboton = "Mostrar controles"
      } else {
        this.botones = true
        this.textoboton = "Ocultar controles"
      }
      
    },
    sumar() {
      return this.contador++
    },

    restar() {
      return this.contador--
    },
  }
}).mount('#app')

