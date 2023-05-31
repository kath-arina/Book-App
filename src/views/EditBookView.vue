<template>
  <button>
    <router-link :to="{ name: 'BookDetails', params: { isbn: book.isbn } }"
      >Back</router-link
    >
  </button>

  <h1>Book details</h1>
  <div>
    Title:
    <input type="text" name="title" v-model="book.title" />
  </div>
  <div>
    Author:
    <input type="text" name="author" v-model="book.author" />
  </div>
  <div>
    Abstract:
    <input type="text" name="abstract" id="abstract" v-model="book.abstract" />
  </div>
  <div>Price:<input type="text" name="price" v-model="book.price" /></div>
  <div>ISBN:<input type="text" name="ISBN" v-model="book.isbn" /></div>

  <button @click="saveChanges">Save Changes</button>
</template>

<script>
export default {
  name: "EditBookView",
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
  methods: {
    saveChanges() {},
  },
};
</script>

<style scoped>
input {
  min-width: 20rem;
}

#abstract {
  min-height: 5rem;
}
</style>
