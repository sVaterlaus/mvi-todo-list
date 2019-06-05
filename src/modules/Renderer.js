import { patch } from 'superfine'


const Renderer = (container) => {
  let prevNode
  return (newNode) => {
    prevNode = patch(prevNode, newNode, container)
  }
}

export default Renderer