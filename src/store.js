const Store = require('./modules/Store')


const store = Store({
  todos: [],
  todoInput: '',
})

module.exports = store
