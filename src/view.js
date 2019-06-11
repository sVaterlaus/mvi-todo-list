// the "h" import is required bedcause JSX is transpiled to superfine's "h" function
import { h } from 'superfine' // eslint-disable-line no-unused-vars

// cyclic import between on() and view() is required for app to function as expected (see readme)
import on from './on' // eslint-disable-line import/no-cycle
import Renderer from './modules/Renderer'


const render = Renderer(document.body)

const Todos = ({ todos }) => (
  <ul>
    {todos.map(todo => <div key={todo.id} style={{ display: 'flex' }}>
      <button
        data-id={todo.id}
        oncreate={on(['click', 'deleteTodo'])}
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
      oncreate={on(['keyup', 'addTodo'], ['input', 'inputTodo'])}
    ></input>
    <button oncreate={on(['click', 'addTodo'])}>add</button>
  </span>
)


const view = (model$) => {
  model$.onValue((model) => {
    const todos = model.get('todos').toJS()
    const todoInputValue = model.get('todoInputValue')

    render(
      <div>
        <h2>MVI Todo List</h2>
        <Todos todos={todos} />
        <TodoInput inputValue={todoInputValue} />
      </div>,
    )
  })
}


export default view
