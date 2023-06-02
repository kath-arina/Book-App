<template>
  <h1>{{ heading }}</h1>
  <form action="">
    <div>
      Title:
      <input type="text" name="title" v-model="book.title" required />
    </div>
    <div>
      Author:
      <input type="text" name="author" v-model="book.author" required />
    </div>
    <div>
      Abstract:
      <input
        type="text"
        name="abstract"
        id="abstract"
        v-model="book.abstract"
      />
    </div>
    <div>Price:<input type="text" name="price" v-model="book.price" /></div>
    <div>
      ISBN:<input type="text" name="ISBN" v-model="book.isbn" required />
    </div>
    <div>
      <input
        id="submitBtn"
        @click="detectOrigin"
        type="submit"
        :value="buttonText"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "AddEditBook",
  props: {
    id: String,
  },
  data() {
    return {
      book: {
        id: "",
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
      return this.id === "" ? "add new Book" : "edit Book";
    },
    buttonText() {
      return this.id === "" ? "add book" : "save changes";
    },
  },
  components: {},
  created() {
    fetch("http://localhost:4730/books/" + this.$route.params.id)
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
    routeBack() {
      this.$router.push({
        name: "BookDetails",
        params: { id: this.book.id }, // hier kann auch updatedBook.isbn stehen
      });
    },
    saveChanges() {
      if (
        this.book.title === "" ||
        this.book.author === "" ||
        this.book.isbn === ""
      ) {
        console.error("Erforderliche Felder nicht ausgefüllt");
        return;
      }
      fetch("http://localhost:4730/books/" + this.$route.params.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.book),
      })
        .then((res) => res.json())
        .then((updatedBook) => {
          console.log("Changes saved:", updatedBook);
        })
        .catch((error) => {
          console.error("Error saving changes:", error);
        });
      this.routeBack();
    },

    addNewBook() {
      if (
        this.book.title === "" ||
        this.book.author === "" ||
        this.book.isbn === ""
      ) {
        console.error("Erforderliche Felder nicht ausgefüllt");
        return;
      } else {
        this.book.id = this.book.isbn;
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
          })
          .catch((error) => {
            console.error("Error adding new book:", error);
          });
        this.routeBack();
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

#submitBtn {
  background: rgb(252, 226, 186);
  color: rgb(84, 84, 84);
  padding: 7px 20px;
  border-radius: 8px;
  box-shadow: 2px 3px 2px 2px rgb(252, 226, 186);
  border: 2px solid salmon;
  font-size: 1rem;
  font-weight: 600;
}
</style>
