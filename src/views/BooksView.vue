<template>
  <header class="site-header">
    <h1>List of all Books</h1>
    <button id="add">
      <router-link :to="{ name: 'addBook' }">Add Book</router-link>
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
          <router-link
            :to="{ name: 'BookDetails', params: { isbn: book.isbn } }"
            >Details
          </router-link>
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

<style>
.site-header {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#add {
  /* position: absolute; */
  align-self: right;
  background: salmon;
}
</style>
