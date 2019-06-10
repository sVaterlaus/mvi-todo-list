// the "h" import is required bedcause JSX is transpiled to superfine's "h" function
const { h } = require('superfine') // eslint-disable-line no-unused-vars

const model = require('./model')
const intent = require('./intent')
const Renderer = require('./modules/Renderer')


const run = e => {
  view(model(intent(e)))
}
const render = Renderer(document.body)

const view = (model) => {
  const todos = model.get('todos').toJS()
  const todoInput = model.get('todoInput')

  render(
    <div>
      <h2>MVI Todo List</h2>
      <ul>
        {todos.map(todo => <div key={todo.id} style={{ display: 'flex' }}>
          <button
            class='delete-todo'
            data-id={todo.id}
            onclick={run}
          >X</button>
          <li style={{ listStyleType: 'none' }}>{todo.text}</li>
        </div>)}
      </ul>
      <span>
        <input
          class='input-todo'
          type='text'
          value={todoInput}
          onkeyup={run}
          oninput={run}
        ></input>
        <button
          class='add-todo'
          onclick={run}
        >add</button>
      </span>
    </div>
  )
}

module.exports = view
