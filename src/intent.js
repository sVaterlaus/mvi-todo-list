const uuid = require('uuid/v4')


const intent = (e) => {
  if (e.type === 'input' && e.target.className === 'input-todo')
    return { type: 'INPUT_TODO', payload: { value: e.target.value } }

  if (e.type === 'click' && e.target.className === 'add-todo')
    return { type: 'ADD_TODO', payload: { id: uuid() } }

  if (e.type === 'keyup' && e.key === 'Enter' && e.target.className === 'input-todo')
    return { type: 'ADD_TODO', payload: { id: uuid() } }

  if (e.type === 'click' && e.target.className === 'delete-todo')
    return {
      type: 'DELETE_TODO',
      payload: { id: e.target.dataset.id }
    }

  return {}
}

module.exports = intent
