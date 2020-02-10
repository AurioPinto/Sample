<template>
  <div class="unix">
    <baidu></baidu>
  </div>
</template>

<script>
import baidu from "../components/baidu";
export default {
  name: "index",
  components: { baidu },
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