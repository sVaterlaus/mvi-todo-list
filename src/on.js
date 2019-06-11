import * as B from 'baconjs'

// cyclic import between on() and view() is required for app to function as expected (see readme)
import view from './view' // eslint-disable-line import/no-cycle
import model from './model'
import intent from './intent'


const on = (...listeners) => (el) => {
  listeners
    .map(([eventType, tag]) => [B.fromEvent(el, eventType), tag])
    .forEach(taggedStream => view(model(intent(taggedStream))))
}


export default on
