const model = require('./model')
const view = require('./view')
const intent = require('./intent')
const store = require('./store')


/*
app() has no return value, it only renders the initial model to the DOM and trigger the intent -> model -> view pattern
*/
const app = (initModel$) => { // eslint-disable-line fp/no-nil
  view(initModel$)
  view(model(intent()))
}

app(store.stream())
