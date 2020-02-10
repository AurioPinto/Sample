<template>
    <div>
      <div>
        <h1>{{greet('Morning')}}</h1>
        <p>Name: {{name}}</p>
        <p>job: {{job}}</p>
        <h1>Data Binding</h1>
        <a v-bind:href="website">Aurio</a>
      </div>
      <div>
        <h1>Events</h1>
        <button @click.once="add(1)">Add a Year</button>
        <button @click="subtract(1)">Subtract Year</button>
        <p>My age is {{age}}</p>
      </div>
      <div id="canvas" @mousemove="updateXY">{{x}}, {{y}}</div>
      <!-- computed properties -->
      <div>
        <h1>Computed properties</h1>
        <button @click="a++">Add to A</button>
        <button @click="b++">Add to B</button>
        <p>A - {{a}}</p>
        <p>B - {{b}}</p>
        <p>Age + a = {{addToA}}</p>
        <p>Age + b = {{addToB}}</p>
      </div>
      <h2>Machine</h2>
      <button @click="nearby = !nearby">Toggle nearby</button>
      <button @click="available =!available">Toggle available</button>
      <div v-bind:class="compClasses">
        <span>Ryu</span>
      </div>
      <!-- Conditional  -->
      <h1>Conditional</h1>
      <button @click="error = !error">Toggle Error</button>
      <button @click="sucess = !sucess">Toggle Sucess</button>
      <!-- <p v-if="error">There has been an error</p> -->
      <!-- <p v-else-if="sucess">This message has sucess, congrats!</p> -->
      <p v-show="error">There has been a error</p>
      <p v-show="sucess">whoooo! This sucess</p>
      <div>
        <h1>Looping through list</h1>
        <ul>
          <li class="list" v-for="character in characters" :key="character">{{character}}</li>
        </ul>
        <ul>
          <li
            v-for="(apdevices,index) in apdevices"
            :key="apdevices"
          >{{index}} . {{apdevices.name}} - {{apdevices.age}}</li>
        </ul>
      <!-- </div> -->
      <!-- <div v-for="(apdevices,index )in apdevices" :key="apdevices">
      <h3>{{index}} . {{apdevices.name}}</h3>
      <p>{{apdevices.age}}</p>
      </div>-->
      <!-- <div>
      <h2>Refs</h2>
      <input type="text" ref="input" />
      <button @click="readRefs">Submit</button>
      <p>My favorite language: {{output}}</p>
      </div>-->
      <!-- <screen></screen> -->
    </div>
</template>

<script>
export default {
  name: "page",
  data() {
    return {
      user: {
        name: "page"
      },
      name: "Aurio Pinto",
      available: false,
      nearby: false,
      error: false,
      sucess: false,
      output: "PMy favorite language",
      characters: ["Aurio", "Machine", "tech", "computer-vision", "beyond"],
      apdevices: [
        { name: "Aurio", age: 25 },
        { name: "Aurio", age: 25 },
        { name: "Aurio", age: 25 },
        { name: "Aurio", age: 25 },
        { name: "Aurio", age: 25 }
      ],
      job: "Machine Learning Enginner",
      website: "https://www.auriopinto.com.cn",
      age: 25,
      x: 0,
      y: 0,
      a: 0,
      b: 0
    };
  },
  methods: {
    greet: function(time) {
      return "Good" + "" + time + "" + this.name;
    },
    // button methods To add a year and substract a year
    add: function() {
      this.age++;
    },
    subtract: function() {
      this.age--;
    },
    // Track the Mouse moving of the X & Y
    updateXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    // computed and properties
    computed: {
      addToA: function() {
        console.log("addToA");
        return this.a + this.age;
      },
      addToB: function() {
        console.log("addToB");
        return this.b + this.age;
      },
      compClasses: function() {
        return {
          available: this.available,
          nearby: this.nearby
        };
      }
      // References and host data
      // readRefs: function() {
      //   console.log(this.$refs.input.value);
      //   this.output = this.$refs.input.value;
      // }
    }
  }
};
</script>

<style lang="scss" scoped>
#canvas {
  width: 600px;
  padding: 20px 20px;
  text-align: center;
  border: 1px solid #333;
}

span {
  background-color: red;
  display: inline-block;
  padding: 10px;
  color: #ffffff;
  margin: 10px 0;
}

.available span {
  background-color: green;
}

.nearby span::after {
  content: nearby;
  margin-left: 10px;
}
// .list {
//   text-align: center;
// }
</style>