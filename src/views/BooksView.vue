<template>
  <AllBooks />
</template>

<script>
import AllBooks from "@/components/AllBooks.vue";
export default {
  name: "BooksView",
  data() {
    return {
      books: [],
    };
  },
  components: {
    AllBooks,
  },
  created() {
    fetch("http://localhost:4730/books")
      .then((res) => res.json())
      .then((books) => (this.books = books));
  },
};
</script>
