import Immutable from 'immutable'


export const Store = (state) => {
  let store = Immutable.fromJS(state)
  return {
    state: store,
    update: (transform) => {
      store = transform(store)
      return store
    },
    log: (label = 'store') => {
      console.log(`${label}: `, store.toJS())
    },
  }
}
