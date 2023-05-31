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
  name: "BookDetailsView",
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
