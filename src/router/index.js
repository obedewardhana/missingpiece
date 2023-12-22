import Vue from "vue";
import Router from "vue-router";
import HomePage from "../pages/Home.vue";
import AboutPage from "../pages/About.vue";
import AOS from "aos";
import 'aos/dist/aos.css';

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "HomeDefault",
    component: HomePage,
    meta: {
      requiresAuth: false,
      hideNavbar: false,
      hideFooter: false
    }
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
    meta: {
      requiresAuth: false,
      hideNavbar: false,
      hideFooter: false
    }
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
    meta: {
      requiresAuth: false
    }
  }
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


export default router;

router.beforeEach((to, from, next) => {
  AOS.init();
  window.scrollTo(0, 0);
  // Redirect if fullPath begins with a hash (ignore hashes later in path)
  if (to.fullPath.substr(0,2) === "/#") {
      window.scrollTo(0, 0);
      const path = to.fullPath.substr(2);
      next(path);
      return;
  }
  next();
});