import uuid from 'uuid/v4'


const intent = ([label, e]) => {
  switch (label) {
    case 'deleteTodoClick': {
      return {
        type: 'DELETE_TODO',
        payload: { id: e.target.dataset.id }
      }
    }
    case 'addTodoClick': {
      return { type: 'ADD_TODO', payload: { id: uuid() } }
    }
    case 'inputTodoKeyup': {
      return e.key === 'Enter'
        ? { type: 'ADD_TODO', payload: { id: uuid() } }
        : {}
    }
    case 'inputTodoInput': {
      return { type: 'INPUT_TODO', payload: { value: e.target.value } }
    }
    default: {
      return {}
    }
  }
}


export default intent
