<template>
  <BookDetails />
</template>

<script>
import BookDetails from "@/components/BookDetails.vue";
export default {
  name: "BookDetailsView",
  data() {
    return {
      book: {},
    };
  },
  components: {
    BookDetails,
  },
  created() {
    fetch("http://localhost:4730/books/" + this.$route.params.isbn)
      .then((res) => res.json())
      .then((book) => (this.book = book));
  },
};
</script>
