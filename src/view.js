// the "h" import is required bedcause JSX is transpiled to superfine's "h" function
import { h } from 'superfine' // eslint-disable-line no-unused-vars

import Renderer from './modules/Renderer'
import run from './run'


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
            data-id={todo.id}
            onclick={run('deleteTodoClick')}
          >X</button>
          <li style={{ listStyleType: 'none' }}>{todo.text}</li>
        </div>)}
      </ul>
      <span>
        <input
          type='text'
          value={todoInput}
          onkeyup={run('inputTodoKeyup')}
          oninput={run('inputTodoInput')}
        ></input>
        <button
          onclick={run('addTodoClick')}
        >add</button>
      </span>
    </div>
  )
}


export default view
