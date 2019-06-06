const { h } = require('superfine')

const Renderer = require('./modules/Renderer')


const render = Renderer(document.body)

const view = (model$) => {
  model$.map(model => {
    const todos = model.get('todos').toJS()
    const todoInput = model.get('todoInput')

    return h('div', {},
      h('h2', {}, 'MVI Todo List'),
      h('ul', {},
        todos.map(todo => h('div', {
          key: todo.id, style: {
            display: 'flex'
          }
        },
          h('button', { id: 'deleteTodo' }, 'X'),
          h('li', { style: { listStyleType: 'none' } }, todo.text),
        ))
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

module.exports = view
