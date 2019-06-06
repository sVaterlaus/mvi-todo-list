const { patch } = require('superfine')


const Renderer = (container) => {
  let prevNode
  return (newNode) => {
    prevNode = patch(prevNode, newNode, container)
  }
}

module.exports = Renderer