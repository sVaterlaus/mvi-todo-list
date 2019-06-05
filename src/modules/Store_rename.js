import Immutable from 'immutable'


const Store = (initState) => {
  let state = Immutable.fromJS(initState)
  const store = {
    getState: () => state,
    update: (transform) => {
      state = transform(state)
      return store
    },
    log: (label = 'store') => {
      console.log(`${label}: `, state.toJS())
    },
  }
  return store
}

export default Store
