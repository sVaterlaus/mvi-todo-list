import { h } from 'superfine'
import { Store } from './modules/store'
import { Renderer } from './modules/render'


const render = Renderer(document.body)

const store = Store({
  users: [
    { id: 0, firstName: 'Spencer' },
    { id: 1, firstName: 'Charlie' },
  ],
})

const intent = event => {
  console.log('event: ', event);
  // { type: 'UPDATE_FIRSTNAME', payload: { id: 0, firstName: 'Bob' } }
  return {}
}

const model = ({ type, payload }) => {
  switch (type) {
    case 'UPDATE_FIRSTNAME': {
      const targetIndex = store.state.get('users').findIndex(user => user.id == payload.id)
      return store.update(state => state.setIn(['users', targetIndex, 'firstName'], payload.firstName))
    }
    default: {
      console.warn('Unrecognized intent type: ', type)
      return store.state
    }
  }
}

const view = (model) => {
  const newDOM = (
    h('div', {},
      h('ul', {},
        model.get('users').toJS().map(user =>
          h('li', {}, user.firstName))
      ),
      h('button', { onclick: update })
    )
  )
  render(newDOM)
}

const update = event => {
  view(model(intent(event)))
}


update()
