const store = require('./store')


const model = (intent$) => intent$.map(({ type, payload }) => {
  switch (type) {
    case 'ADD_TODO': {
      return store.update(state => state
        .updateIn(['todos'], todos => todos.insert(todos.size, payload))
        .setIn(['todoInput'], ''))
    }
    case 'INPUT_TODO': {
      return store.update(state => state.setIn(['todoInput'], payload.value))
    }
    default: {
      console.warn('Unrecognized intent type: ', type)
      return store.state
    }
  }
})

module.exports = model
