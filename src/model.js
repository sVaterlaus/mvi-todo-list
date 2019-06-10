const store = require('./store')


const model = ({ type, payload }) => {
  if (type === 'ADD_TODO') {
    return store.update(state => {
      const inputText = state.get('todoInput')
      return state
        .updateIn(['todos'], todos => todos.insert(todos.size, { text: inputText, id: payload.id }))
        .setIn(['todoInput'], '')
    })

  }
  if (type === 'INPUT_TODO') {
    return store.update(state => state.setIn(['todoInput'], payload.value))
  }
  if (type === 'DELETE_TODO') {
    return store.update(state => state
      .updateIn(['todos'], todos => todos
        .filterNot(todo => todo.id === payload.id)))
  }

  if (type === undefined)
    return store.getState()

  console.warn('Unrecognized intent type: ', type)
  return store.getState()
}


module.exports = model
