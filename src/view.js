// the "h" import is required bedcause JSX is transpiled to superfine's "h" function
const { h } = require('superfine') // eslint-disable-line no-unused-vars

const Renderer = require('./modules/Renderer')


const render = Renderer(document.body)

const view = (model$) => {
  model$.map((model) => {
    const todos = model.get('todos').toJS()
    const todoInput = model.get('todoInput')

    return (
      <div>
        <h2>MVI Todo List</h2>
        <ul>
          {todos.map(todo => <div key={todo.id} style={{ display: 'flex' }}>
            <button id='deleteTodo'>X</button>
            <li style={{ listStyleType: 'none' }}>{todo.text}</li>
          </div>)}
        </ul>
        <span>
          <input
            id='input-todo'
            type='text'
            value={todoInput}
          ></input>
          <button id='add-todo'>add</button>
        </span>
      </div>
    )
  }).onValue(vdom => render(vdom))
}

module.exports = view
