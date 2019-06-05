import Immutable from 'immutable'
const B = require('baconjs')


const Store = (initState) => {
  let state = Immutable.fromJS(initState)
  return {
    state,
    update: (transform) => {
      state = transform(state)
      return state
    },
    stream: () => B.constant(state),
    debug: (label = 'store') => {
      console.log(`${label}: `, state.toJS())
    },
  }
}

export default Store
