<template>
  <button>
    <router-link :to="{ name: 'BookDetails', params: { isbn: book.isbn } }"
      >Back</router-link
    >
  </button>

  <AddEditBook :id="this.$route.params.id" />
</template>

<script>
import AddEditBook from "@/components/AddEditBook.vue";
export default {
  name: "EditBookView",
  data() {
    return {
      book: {},
    };
  },
  components: {
    AddEditBook,
  },
};
</script>
