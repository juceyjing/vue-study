<template>
  <div id="todoList">
    <h1>Todo List</h1>
    <todo-add v-on:add="addTodo"></todo-add>
    <ul class="todoList1">
      <li v-for="(todo,index) in todos" class="todo">
        <input
          type="checkbox"
          name=""
          value=""
          :checked="todo.isCompleted"
          @click="completed(index)"
        >
        <span
          :class="todo.isCompleted ? 'completed' : ''"
          @click="completed(index)"
        >
            <em>{{ index }}.</em>{{ todo.text }}
        </span>

      </li>
    </ul>
  </div>
</template>
<script>
  import TodoAdd from './TodoAdd.vue'
  export default {
    name: 'TodoList',
    components: {
      TodoAdd
    },

    data: () => ({
      todos: [{
        text: '吃饭',
        isCompleted: false
      }, {
        text: '睡觉',
        isCompleted: false
      }]
    }),
    methods: {
      completed (index) {
        this.todos[index].isCompleted = !this.todos[index].isCompleted
      },
      addTodo (todo) {
        this.todos.push({
          text: todo,
          isCompleted: false
        })
      }
    }
  }
</script>
<style scoped>
  #todoList {
    margin: 0 auto;
    max-width: 350px;
  }
  .todos li {
    list-style: none;
  }
  .todo {
    text-align: left;
    cursor: pointer;
  }
  .completed {
    text-decoration: line-through;
  }
</style>
