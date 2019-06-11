import store from './store'


const model = ({ type, payload }) => {
  switch (type) {
    case 'ADD_TODO': {
      return store.update(state => {
        const inputText = state.get('todoInputValue')
        return state
          .updateIn(['todos'], todos => todos.insert(todos.size, { text: inputText, id: payload.id }))
          .setIn(['todoInputValue'], '')
      })
    }
    case 'INPUT_TODO': {
      return store.update(state => state.setIn(['todoInputValue'], payload.value))
    }
    case 'DELETE_TODO': {
      return store.update(state => state
        .updateIn(['todos'], todos => todos
          .filterNot(todo => todo.id === payload.id)))
    }
    case undefined: {
      return store.getState()
    }
    default: {
      console.warn('Unrecognized intent type: ', type)
      return store.getState()
    }
  }
}


export default model
