<template>
  <baidu>
    <h1 class="h1">{{ title }}</h1>
    <div>
      <div class="show">
        <h1>您好 {{ fullname }}</h1>
        <ul>
          <li>First Name: {{ first }}</li>
          <li>Middle Name: {{ Middle }}</li>
          <li>Last Name: {{ last }}</li>
        </ul>
      </div>
      <div class="full">
        <p>Full Name</p>
        <input type="text" class="none" v-model="fullname" />
      </div>
      <div class="table">
        <div>
          <p>First Name:</p>
          <input type="text" class="control" v-model="first" />
        </div>
        <div>
          <p>Middle Name:</p>
          <input type="text" class="col2" v-model="Middle" />
        </div>
        <div class="col2">
          <p>Last Name:</p>
          <input type="text" class="control-v" v-model="last" />
        </div>
      </div>
      <screen></screen>
      <div class="computed">
        <h1>Test</h1>
      </div>
    </div>
  </baidu>
</template>

<script>
import screen from "./screen";
export default {
  components: {
    screen: screen
  },
  name: "VueJsDialogw",

  data() {
    return {
      user: {
        name: "VueJsDialog"
      },
      first: "",
      Middle: "",
      last: "",
      title: "Pinto's Neural Network"
    };
  },
  computed: {
    fullname: function() {
      return this.first + "" + "" + this.Middle + "" + this.last;
    }
  }
};
</script>

<style lang="scss" scoped>
.show h1 {
  text-align: center;
}
.full {
  text-align: center;
}
.table {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  .col2 {
    margin: 0 5px 0;
  }
}
.h1 {
  background-color: lightgreen;
  padding: 10px;
  text-align: center;
  color: #222;
}
</style>
