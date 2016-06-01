import Vue from "vue";
import VueResource from "vue-resource";
import $ from "jquery";
import app from "./components/app";
import "../node_modules/spectre.css/dist/spectre.min.css";

Vue.use(VueResource);



new Vue({
    el:"body",
    components:{
        app:app
    }
});
