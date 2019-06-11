import uuid from 'uuid/v4'
import { never } from 'baconjs'


const intent = ([event$, tag]) => {
  switch (tag) {
    case 'deleteTodo': {
      return event$.map(e => ({
        type: 'DELETE_TODO',
        payload: { id: e.target.dataset.id },
      }))
    }

    case 'addTodo': {
      return event$
        .filter(e => (e.key ? e.key === 'Enter' : true))
        .map(() => ({
          type: 'ADD_TODO',
          payload: { id: uuid() },
        }))
    }

    case 'inputTodo': {
      return event$.map(e => ({
        type: 'INPUT_TODO',
        payload: { value: e.target.value },
      }))
    }

    case 'toggleComplete': {
      return event$.map(e => ({
        type: 'TOGGLE_COMPLETE',
        payload: { id: e.target.dataset.id },
      }))
    }

    default: {
      console.warn('Event tag not recognized: ', tag)
      return never()
    }
  }
}


export default intent
