<template>
  <header class="site-header">
    <h1>List of all Books</h1>
    <button id="addBtn">
      <router-link :to="{ name: 'addBook' }" style="text-decoration: none"
        >Add Book</router-link
      >
    </button>
  </header>

  <table class="table-item__table">
    <thead>
      <th class="table-item__table-head-name">Name</th>
      <th class="table-item__table-head--isbn">ISBN</th>
      <th>Details</th>
      <th>Delete</th>
    </thead>
    <tbody>
      <tr v-for="book in books" :key="book.id">
        <td>{{ book.title }}</td>
        <td>{{ book.isbn }}</td>
        <td>
          <div v-if="book.id">
            <router-link :to="{ name: 'BookDetails', params: { id: book.id } }"
              >Details
            </router-link>
          </div>
        </td>
        <td>
          <button @click="deleteBook(book.isbn)" id="deleteBtn">🗑️</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "BooksView",
  data() {
    return {
      books: [],
    };
  },
  created() {
    this.fetchBooks();
  },
  methods: {
    fetchBooks() {
      fetch("http://localhost:4730/books")
        .then((res) => res.json())
        .then((books) => (this.books = books));
    },
    deleteBook(isbn) {
      fetch("http://localhost:4730/books/" + isbn, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(() => {
          this.fetchBooks();
        });
    },
  },
};
</script>

<style scoped>
.site-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: rgb(69, 68, 68);
}

h1 {
  text-align: left;
  margin-left: 2rem;
  flex-grow: 1;
}
button {
  background: rgb(252, 226, 186);
  color: rgb(84, 84, 84);
  padding: 7px 20px;
  border-radius: 8px;
  box-shadow: 2px 3px 2px 2px rgb(252, 226, 186);
  border: 2px solid salmon;
  font-size: 1rem;
  font-weight: 600;
}

table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 2px solid rgb(69, 68, 68);
  box-shadow: 5px 5px lightgrey;
  background: rgb(255, 252, 249);
  border-radius: 10px;
}

thead th:nth-child(1) {
  width: 40%;
}

thead th:nth-child(2) {
  width: 30%;
}

thead th:nth-child(3) {
  width: 20%;
}
thead th:nth-child(4) {
  width: 10%;
}

th,
td {
  padding: 8px;
}
tbody td {
  text-align: center;
}
thead {
  background: rgba(0, 0, 0, 0.405);
  color: rgba(255, 235, 205, 0.919);
  text-shadow: 1px 1px 1px salmon;
  font-size: 1.5rem;
}
tbody {
  background: rgba(255, 255, 255, 0.2);
}

tr > td:hover {
  background-color: rgba(255, 140, 105, 0.626);
}

#deleteBtn {
  border: none;
  background: transparent;
}
</style>
