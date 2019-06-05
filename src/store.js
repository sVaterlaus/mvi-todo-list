import Store from './modules/Store'


const store = Store({
  todos: [
    { id: 0, text: 'Be one with the spaghetti' },
    { id: 1, text: 'Change legal name to Code Doctor' },
  ],
})

export default store