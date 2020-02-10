<template>
  <div class="unix">
    <screen></screen>
  </div>
</template>

<script>
import screen from "../components/screen";
export default {
  name: "index",
  components: { screen },
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
