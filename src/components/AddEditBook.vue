<template>
  <h1>{{ heading }}</h1>
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

  <button @click="detectOrigin">{{ buttonText }}</button>
  <div>hello{{ this.book.isbn }}</div>
  <div>hello{{ this.heading }}</div>
</template>

<script>
export default {
  name: "AddEditBook",
  data() {
    return {
      book: {
        title: "",
        author: "",
        abstract: "",
        price: "",
        isbn: "",
        cover: "",
      },
    };
  },
  computed: {
    heading() {
      return this.book.isbn === "" ? "add new Book" : "edit Book";
    },
    buttonText() {
      return this.book.isbn === "" ? "add book" : "save changes";
    },
  },
  components: {},
  created() {
    fetch("http://localhost:4730/books/" + this.$route.params.isbn)
      .then((res) => res.json())
      .then((book) => (this.book = book));
  },
  methods: {
    detectOrigin() {
      if (this.buttonText === "add book") {
        this.addNewBook();
      } else {
        this.saveChanges();
      }
    },
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
