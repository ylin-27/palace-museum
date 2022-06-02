import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//引入swiper样式
import "swiper/css/swiper.min.css";

new Vue({
    render: h => h(App),
}).$mount('#app')