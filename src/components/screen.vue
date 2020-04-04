<template>
  <div>
    <select v-model="selected">
      <option v-for="option in options" :key="option" v-bind:value="option.value">{{ option.text }}</option>
    </select>
    <span>Selected: {{ selected }}</span>
    <div>
      <button v-on:click="counter += 2">Like</button>
      <p>The button above has been clicked {{ counter }} times.</p>
    </div>
    <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
    <li
      v-for="(item, index) in items"
      :key="index"
    >>{{ parentMessage }} - {{ index }} - {{ item.message }}</li>
    <div id="todo-list-example">
      <form v-on:submit.prevent="addNewTodo">
        <label for="new-todo">Add a todo</label>
        <input v-model="newTodoText" id="new-todo" placeholder="E.g. Feed the cat" />
        <button>Add</button>
      </form>
      <ul>
        <li
          is="todo-item"
          v-for="(todo, index) in todos"
          v-bind:key="todo.id"
          v-bind:title="todo.title"
          v-on:remove="todos.splice(index, 1)"
        ></li>
      </ul>
    </div>
    <!-- Conditional v-if -->
    <div class="menu">
      <!-- <h1 v-if="hidden">This is me</h1>
      <h1 v-else>Please play this</h1>-->
      <ul>
        <li v-for="ok in okay" :key="ok"></li>
        {{
        ok.text
        }}
        <div v-if="ok.checked">Checked</div>
        <button @click="ok.checked = !ok.checked">Toggle</button>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueJsDialogw",
  props: ["title"],
  data() {
    return {
      user: {
        name: "VueJsDialogw"
      },
      counter: 0,
      numbers: [1, 2, 3, 4, 5],
      selected: "A",
      parentMessage: "Science",
      newTodoText: "",
      // hidden: false,
      ok: true,
      okay: [
        { text: "first1", checked: true },
        { text: "second2", checked: true },
        { text: "third3", checked: false }
      ],
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
        { text: "Aurio", value: "D" }
      ],
      items: [
        { message: "Foo" },
        { message: "Bar" },
        { message: "Machine" },
        { message: "Deep Learning" }
      ],
      points: [
        { news: "Aurio Pinto" },
        { news: "Machine Learning" },
        { news: "Dell" },
        { news: "Microsoft" }
      ],
      todos: [
        {
          id: 1,
          title: "Do the dishes"
        },
        {
          id: 2,
          title: "Take out the trash"
        },
        {
          id: 3,
          title: "Mow the lawn"
        }
      ],
      nextTodoId: 4
    };
  },
  methods: {
    even: function(numbers) {
      return numbers.filter(function(number) {
        return number % 2 === 1;
      });
    }
  },
  // node: {
  addNewTodo: function() {
    this.todos.push({
      id: this.nextTodoId++,
      title: this.newTodoText
    });
    this.newTodoText = "";
  }
  // }
};
</script>

<style lang="scss" scoped></style>
