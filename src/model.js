const B = require('baconjs')

import store from './store'


const model = (intent$) => intent$.map(({ type, payload }) => {
  switch (type) {
    case 'ADD_TODO': {
      // console.log('store: ', store)
      return store.update(state => state.updateIn(['todos'], todos =>
        todos.insert(todos.size, payload)
      )).getState()
    }
    default: {
      console.warn('Unrecognized intent type: ', type)
      return store.getState()
    }
  }
})

export default model