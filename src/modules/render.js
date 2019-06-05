import { patch } from 'superfine'

export const Renderer = (container) => {
  let prevNode
  return (newNode) => {
    prevNode = patch(prevNode, newNode, container)
  }
}
