<template></template>

<script>
import axios from "axios";
export default {
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      user: {
        name: "VueJsDialog"
      }
    };
  },
  methods: {
    display(id) {
      axiosAl
        .display(
          `https://api.jikan.moe/v3/search/anime?q={query}&limit={n}&page={n (id)`
        )
        .then(res => (this.tasks = this.tasks.filter(task => task.id !== id)))
        .catch(err => console.log(err));
    }
  },
  created() {
    axios
      .get(
        "https://api.jikan.moe/v3/search/anime?q={query}&limit={n}&page={n (id)"
      )
      .then(res => (this.tasks = res.data))
      .catch(err => console.log(err));
  }
};
</script>
