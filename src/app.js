const B = require('baconjs')

import model from './model'
import view from './view'
import intent from './intent'
import store from './store'


const app = (initModel$) => {
  view(initModel$)
  view(model(intent()))
}

app(B.constant(store.getState()))
