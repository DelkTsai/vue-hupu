import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import About from '@/components/About';
import Home from '@/components/Home';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },{
      path: '/About',
      name: 'About',
      component: About
    },{
      path: '/Home',
      name: 'Home',
      component: Home
    },
  ]
})
