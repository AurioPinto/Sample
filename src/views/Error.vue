<template>
  <div class="unix">
    <Error></Error>
  </div>
</template>

<script>
import Error from "../components/Error";
export default {
  name: "index",
  components: { Error },
  data: function() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.unix {
  background-color: #ffffff;
  min-height: 100vh;
}
</style>  