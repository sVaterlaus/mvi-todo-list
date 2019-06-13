// the "h" import is required bedcause JSX is transpiled with superfine's "h" function
import { h } from 'superfine' // eslint-disable-line no-unused-vars

import on from './on'
import Renderer from './modules/Renderer'

const render = Renderer(document.body)

const Todo = ({ todo }) => (
  <div
    key={todo.id}
    data-id={todo.id}
    style={{ display: 'flex' }}
    draggable
    oncreate={on(
      ['dragstart', 'startDragTodo'],
      ['dragover', 'dragOverTodo', true],
      ['drop', 'dropTodo', true]
    )}
  >
    <button
      data-id={todo.id}
      oncreate={on(['click', 'toggleCompleteTodo'])}
    >Y</button>
    <button
      data-id={todo.id}
      oncreate={on(['click', 'deleteTodo'])}
    >X</button>
    <li data-id={todo.id} style={{ listStyleType: 'none' }}>{todo.text}</li>
  </div>
)

const Todos = ({ todos }) => <ul>{todos.map(todo => <Todo todo={todo} />)}</ul>

const TodoInput = ({ inputValue }) => (
  <span>
    <input
      type='text'
      value={inputValue}
      oncreate={on(['keyup', 'addTodo'], ['input', 'inputTodo'])}
    />
    <button oncreate={on(['click', 'addTodo'])}>add</button>
  </span>
)

const view = (model$) => {
  model$.onValue((model) => {
    const todos = model.get('todos').toJS()
    const todoInputValue = model.get('todoInputValue')
    const completed = todos.filter(todo => todo.isComplete)
    const pending = todos.filter(todo => !todo.isComplete)

    render(
      <div>
        <h2>Todo:</h2>
        <Todos todos={pending} />
        <TodoInput inputValue={todoInputValue} />
        <h2>Completed:</h2>
        <Todos todos={completed} />
      </div>
    )
  })
}

export default view
