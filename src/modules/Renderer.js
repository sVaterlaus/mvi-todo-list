const { patch } = require('superfine')

/* eslint-disable fp/no-mutation, fp/no-let */
// Renderer's variable reassignment is necessary for the VDOM's diffing algorithm
const Renderer = (container) => {
  let prevNode
  return (newNode) => {
    prevNode = patch(prevNode, newNode, container)
  }
}

module.exports = Renderer
