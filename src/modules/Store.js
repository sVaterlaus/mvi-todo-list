const Immutable = require('immutable')
const B = require('baconjs')


// Store's variable reassignment is necessary for updating an immutable data store
const Store = (initState) => {
  let state = Immutable.fromJS(initState) // eslint-disable-line fp/no-let
  return {
    state,
    update: (transform) => {
      state = transform(state) // eslint-disable-line fp/no-mutation
      return state
    },
    stream: () => B.constant(state),
    // debug: NOT FOR PRODUCTION
    debug: (label = 'store') => {
      console.log(`${label}: `, state.toJS())
    },
  }
}

module.exports = Store
