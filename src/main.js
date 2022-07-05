import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA85_ATrQtO5BrDGh1-yC4yeOBzTPeF3-c",
    authDomain: "generarqr-vue-vite.firebaseapp.com",
    projectId: "generarqr-vue-vite",
    storageBucket: "generarqr-vue-vite.appspot.com",
    messagingSenderId: "550340801613",
    appId: "1:550340801613:web:d24c4049a4dd00ec5d1804"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount("#app")