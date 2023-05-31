<template>
  <InputPage />
</template>

<script>
import InputPage from "@/components/InputPage.vue";
export default {
  name: "EditBookView",
  data() {
    return {
      book: {},
    };
  },
  components: {
    InputPage,
  },
  created() {
    fetch("http://localhost:4730/books/" + this.$route.params.isbn)
      .then((res) => res.json())
      .then((book) => (this.book = book));
  },
  methods: {
    saveChanges() {
      fetch("http://localhost:4730/books/" + this.$route.params.isbn, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.book),
      })
        .then((res) => res.json())
        .then((updatedBook) => {
          console.log("Changes saved:", updatedBook);

          this.$router.push({
            name: "BookDetails",
            params: { isbn: this.book.isbn }, // hier kann auch updatedBook.isbn stehen
          });
        })
        .catch((error) => {
          console.error("Error saving changes:", error);
        });
    },
  },
};
</script>
