import store from './store'


const model = ({ type, payload }) => {
  switch (type) {
    case 'ADD_TODO': {
      return store.update(state => {
        const inputText = state.get('todoInput')
        return state
          .updateIn(['todos'], todos => todos.insert(todos.size, { text: inputText, id: payload.id }))
          .setIn(['todoInput'], '')
      })
    }
    case 'INPUT_TODO': {
      return store.update(state => state.setIn(['todoInput'], payload.value))
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
