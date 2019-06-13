import * as B from 'baconjs'

import view from './view'
import model from './model'
import intent from './intent'

const preventDefault = (e) => {
  e.preventDefault()
  return e
}

const on = (...listeners) => (el) => {
  listeners.map(([eventType, tag, shouldPreventDefault = false]) => shouldPreventDefault
    ? [B.fromEvent(el, eventType, preventDefault), tag]
    : [B.fromEvent(el, eventType), tag],
  ).forEach(taggedStream => view(model(intent(taggedStream))))
}

export default on
