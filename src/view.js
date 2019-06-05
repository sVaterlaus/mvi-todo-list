import { h } from 'superfine'

import Renderer from './modules/Renderer'


const render = Renderer(document.body)

const view = (model$) => {
  model$.map(model => {
    const todos = model.get('todos').toJS()
    const todoInput = model.get('todoInput')

    return h('div', {},
      h('h2', {}, 'MVI Todo List'),
      h('ul', {},
        todos.map(todo => h('li', { key: todo.id }, todo.text))
      ),
      h('span', {},
        h('input', {
          id: 'input-todo',
          type: 'text',
          value: todoInput,
        }),
        h('button', { id: 'add-todo' }, 'add'),
      )
    )
  }).onValue(vdom => render(vdom))
}

export default view
