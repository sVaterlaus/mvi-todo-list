import * as B from 'baconjs'

import view from './view'
import model from './model'
import intent from './intent'

const on = (...listeners) => (el) => {
  listeners
    .map(([eventType, tag]) => [B.fromEvent(el, eventType), tag])
    .forEach(taggedStream => view(model(intent(taggedStream))))
}

export default on
