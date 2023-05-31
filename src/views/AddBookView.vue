<template>
  <button><router-link :to="{ name: 'Books' }">Back</router-link></button>
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
  <div>
    Price:
    <input type="text" name="price" v-model="book.price" />
  </div>
  <div>
    ISBN:
    <input type="text" name="ISBN" v-model="book.isbn" />
  </div>

  <button @click="addNewBook">Add Book</button>
</template>

<script>
export default {
  name: "EditBookView",
  data() {
    return {
      book: {
        title: "",
        author: "",
        abstract: "",
        price: "",
        isbn: "",
      },
    };
  },

  methods: {
    addNewBook() {
      fetch("http://localhost:4730/books/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.book),
      })
        .then((res) => res.json())
        .then((newBook) => {
          console.log("New Book saved:", newBook);

          this.$router.push({
            name: "BookDetails",
            params: { isbn: newBook.isbn },
          });
        })
        .catch((error) => {
          console.error("Error adding new book:", error);
        });
    },
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
