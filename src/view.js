import { h } from 'superfine'
import Renderer from './modules/Renderer'


const render = Renderer(document.body)

const view = (model$) => {
  model$.map(model => (
    h('div', {},
      h('ul', {},
        model.get('todos').toJS().map(todo =>
          h('li', {}, todo.text))
      ),
      h('button', { id: 'add-todo' }),
    )
  )).onValue(vdom => render(vdom))
}

export default view
