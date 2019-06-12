import Immutable from 'immutable'
import * as B from 'baconjs'

// Store's variable reassignment is necessary for updating an immutable data store
const Store = (initState) => {
  let state = Immutable.fromJS(initState) // eslint-disable-line fp/no-let
  return {
    getState: () => state,

    update: (transform) => {
      state = transform(state) // eslint-disable-line fp/no-mutation
      return state
    },

    stream: () => B.constant(state),

    DEBUG: (label = 'store') => {
      console.log(`${label}: `, state.toJS())
    },
  }
}

export default Store
