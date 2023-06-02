import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
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
    path: "/books/addbook",
    name: "addBook",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddBookView.vue"),
  },
  {
    path: "/books/:isbn/edit",
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
