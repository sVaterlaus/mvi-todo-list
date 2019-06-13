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

    case 'TOGGLE_COMPLETE_TODO': {
      const targetIndex = store.getState().get('todos').findIndex(todo => todo.id === payload.id)
      return store.update(state => state.updateIn(['todos', targetIndex, 'isComplete'], isComplete => !isComplete))
    }

    case 'START_DRAG_TODO': {
      const data = store.getState().get('todos').find(todo => todo.id === payload.id)
      return store.update(state => state.setIn(['dragData'], data)
      )
    }

    case 'DRAG_OVER_TODO': {
      return store.getState()
    }

    case 'DROP_TODO': {
      const todos = store.getState().get('todos')
      const dragTodoId = store.getState().getIn(['dragData', 'id'])
      const dragTodoIndex = todos.findIndex(todo => todo.id === dragTodoId)
      const dropTodoIndex = todos.findIndex(todo => todo.id === payload.id)
      const dragTodo = todos.get(dragTodoIndex)
      return store.update(state => state
        .updateIn(['todos'], todos => todos.delete(dragTodoIndex).insert(dropTodoIndex, dragTodo))
      )
    }

    default: {
      return store.getState()
    }
  }
})

export default model
