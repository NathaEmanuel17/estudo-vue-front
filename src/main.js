import { createApp } from 'vue'
import App from './App.vue'

//importar o pacote mitt
import mitt from 'mitt'

//criar a instância do pacote miit
const emitter = mitt()

//iniciar a instância do vue com base no componete
// createApp(App).mount('#app')

const app = createApp(App)

//configurar a instâcia do pacote mitt como sendo um propriedade global

app.config.globalProperties.emitter = emitter

//associar a instância do vue com o elemento html de id app
app.mount('#app')