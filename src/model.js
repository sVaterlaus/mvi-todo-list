import store from './store'

const model = intent$ => intent$.map(({ type, payload }) => {
  switch (type) {
    case 'ADD_TODO': {
      return store.update((state) => {
        const inputText = state.get('todoInputValue')
        return state
          .updateIn(['todos'], todos => todos.insert(todos.size, {
            text: inputText,
            id: payload.id,
            isComplete: false,
          }))
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

    case 'TOGGLE_COMPLETE': {
      const targetIndex = store.getState().get('todos').findIndex(todo => todo.id === payload.id)
      return store.update(state => state.updateIn(['todos', targetIndex, 'isComplete'], isComplete => !isComplete))
    }

    default: {
      return store.getState()
    }
  }
})

export default model
