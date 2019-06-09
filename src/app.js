const model = require('./model')
const view = require('./view')
const intent = require('./intent')
const store = require('./store')


const app = (initModel$) => {
  view(initModel$)
  view(model(intent()))
}

app(store.stream())
