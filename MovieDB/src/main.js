import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// Bootstrap CSS/JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const app = createApp(App);

app.mount("#app");
