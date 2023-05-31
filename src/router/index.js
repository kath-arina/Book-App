import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/books",
    name: "Books",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BooksView.vue"),
  },
  {
    path: "/books/:isbn",
    name: "BookDetails",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BookDetailsView.vue"),
  },
  {
    path: "/books/addBook",
    name: "addBook",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddBookView.vue"),
  },
  {
    path: "/books/edit/:isbn",
    name: "editBook",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EditBookView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
