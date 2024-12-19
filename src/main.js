import './assets/main.css'
import { reactive } from 'vue';

export const results = reactive({
    cityFilter: "",
    noResults: false,
    items: [],
    set(data) {
        this.items = data;
    }
})

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')