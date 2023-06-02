<template>
  <button><router-link :to="{ name: 'Books' }">Back</router-link></button>

  <AddEditBook />
</template>

<script>
import AddEditBook from "@/components/AddEditBook.vue";

export default {
  name: "AddBookView",
  components: {
    AddEditBook,
  },
};
</script>
