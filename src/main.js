import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from "vue-router/dist/vue-router";

import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import HomePage from "@/pages/HomePage.vue";
import AddVideoPage from "@/pages/AddVideoPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";

const vuetify = createVuetify({
    components,
    directives,
})

const router = new createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: 'HomePage',
            component: HomePage
        },
        {
            path: "/add-video",
            name: "AddVideoPage",
            component: AddVideoPage
        },
        {
            path: "/:pathMatch(.*)*",
            name: "NotFoundPage",
            component: NotFoundPage
        }
    ]
});

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')