<template>
  <button><router-link :to="{ name: 'Books' }">Back</router-link></button>
  <h1>Book details</h1>
  <button id="edit">
    <router-link :to="{ name: 'editBook', params: { isbn: book.isbn } }"
      >Edit</router-link
    >
  </button>
  <h2>{{ book.title }} - {{ book.author }}</h2>
  <p>{{ book.abstract }}</p>
  <div>
    Price:<strong>{{ book.price }}</strong>
  </div>
  <div>ISBN:{{ book.isbn }}</div>
</template>

<script>
export default {
  name: "BookDetails",
  data() {
    return {
      book: {},
    };
  },

  created() {
    fetch("http://localhost:4730/books/" + this.$route.params.isbn)
      .then((res) => res.json())
      .then((book) => (this.book = book));
  },
};
</script>

<style scoped>
button {
  background: rgb(252, 226, 186);
  padding: 7px 20px;
  border-radius: 8px;
  box-shadow: 2px 3px 2px 2px rgb(252, 226, 186);
  border: 4px solid salmon;
  font-size: 1rem;
  font-weight: 600;
}
</style>
