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

  <!-- Hier wird kein router-Link benötigt -->
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

<style scoped>
input {
  min-width: 20rem;
}

#abstract {
  min-height: 5rem;
}

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
