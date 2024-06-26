import {createApp} from 'vue'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import './style.css'
import ruCustom from '@/locales/ruCustom.js'

const vuetify = createVuetify({
    components,
    directives,
    locale: {
        locale: 'ruCustom',
        messages: {ruCustom},
        rtl: {
            customLocale: false,
        },
    },
})

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')

