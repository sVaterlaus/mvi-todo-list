const B = require('baconjs')


const intent = () => {
  const addTodo$ = B.fromEvent(document.getElementById('add-todo'), 'click', (e) => ({
    type: 'ADD_TODO',
    payload: { id: 3, text: 'New todo!' },
  }))

  return B.mergeAll(addTodo$)
}

export default intent