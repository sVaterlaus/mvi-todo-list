// the "h" import is required bedcause JSX is transpiled to superfine's "h" function
import { h } from 'superfine' // eslint-disable-line no-unused-vars

import Renderer from './modules/Renderer'
import run from './run'


const render = Renderer(document.body)

const Todos = ({ todos }) => (
  <ul>
    {todos.map(todo => <div key={todo.id} style={{ display: 'flex' }}>
      <button
        data-id={todo.id}
        onclick={run('deleteTodoClick')}
      >X</button>
      <li style={{ listStyleType: 'none' }}>{todo.text}</li>
    </div>)}
  </ul>
)

const TodoInput = ({ inputValue }) => (
  <span>
    <input
      type='text'
      value={inputValue}
      onkeyup={run('inputTodoKeyup')}
      oninput={run('inputTodoInput')}
    ></input>
    <button
      onclick={run('addTodoClick')}
    >add</button>
  </span>
)


const view = (model) => {
  const todos = model.get('todos').toJS()
  const todoInputValue = model.get('todoInputValue')

  render(
    <div>
      <h2>MVI Todo List</h2>
      <Todos todos={todos} />
      <TodoInput inputValue={todoInputValue} />
    </div>
  )
}


export default view
