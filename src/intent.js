const B = require('baconjs')
const uuid = require('uuid/v4')


const intent = () => {
  const addTodoBtn = document.getElementById('add-todo')
  const inputTodoField = document.getElementById('input-todo')

  const addTodo$ = B.mergeAll(
    B.fromEvent(addTodoBtn, 'click'),
    B.fromEvent(inputTodoField, 'keyup').filter(e => e.key === 'Enter'),
  ).map(() => ({
    type: 'ADD_TODO',
    payload: { id: uuid(), text: inputTodoField.value },
  }))

  const inputTodo$ = B.fromEvent(inputTodoField, 'input', e => ({
    type: 'INPUT_TODO',
    payload: { value: e.target.value },
  }))


  return B.mergeAll(addTodo$, inputTodo$)
}

module.exports = intent
