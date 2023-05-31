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
      <tr>
        <th class="table-item__table-head-name">Name</th>
        <th class="table-item__table-head--isbn">ISBN</th>
        <th class="th.table-item__table-head--action">Details</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="book in books" :key="book.id">
        <td>{{ book.title }}</td>
        <td>{{ book.isbn }}</td>
        <td>
          <div v-if="book.isbn">
            <router-link
              :to="{ name: 'BookDetails', params: { isbn: book.isbn } }"
              >Details
            </router-link>
          </div>
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
    fetch("http://localhost:4730/books")
      .then((res) => res.json())
      .then((books) => (this.books = books));
  },
};
</script>

<style scoped>
.site-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

h1 {
  text-align: left;
  margin-left: 2rem;
  flex-grow: 1;
}

#addBtn {
  background: rgb(252, 226, 186);
  padding: 7px 20px;
  border-radius: 8px;
  box-shadow: 2px 3px 2px 2px rgb(252, 226, 186);
  border: 4px solid salmon;
  font-size: 1rem;
  font-weight: 600;
}

table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid rgb(0, 0, 0);
  background: rgb(252, 226, 186);
  border-radius: 1rem;
}

thead th:nth-child(1) {
  width: 50%;
}

thead th:nth-child(2) {
  width: 30%;
}

thead th:nth-child(3) {
  width: 20%;
}

th,
td {
  padding: 10px;
}
tbody td {
  text-align: center;
}
thead {
  background: rgba(0, 0, 0, 0.6);
  color: rgba(255, 235, 205, 0.919);
  text-shadow: 1px 1px 1px black;
  font-size: 1.5rem;
}
tbody {
  background: rgba(255, 255, 255, 0.2);
}
tbody tr:nth-child(odd) {
  background-color: rgba(255, 235, 205, 0.919);
}

tbody tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.55);
}
tr > td:hover {
  background-color: rgb(244, 244, 191);
}
</style>
