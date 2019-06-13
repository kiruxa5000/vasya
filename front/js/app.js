import Vue from 'vue'
import App from './components/App'
import router from './router';
import Router from 'vue-router';
const a = 1;

Vue.use(Router);
//asdasdasdasd///asd
// Vue.config.productionTip = false;


let vue = new Vue({
    el: '#app',
    router,
    components: {App},
});

export default vue;