const { patch } = require('superfine')

/* eslint-disable fp/no-mutation, fp/no-let, fp/no-nil */
// Renderer's variable reassignment is necessary for the VDOM's diffing algorithm
const Renderer = (container) => {
  let prevNode
  // returned function has no return value, it only renders its input to the DOM
  return (newNode) => {
    prevNode = patch(prevNode, newNode, container)
  }
}

module.exports = Renderer
