import view from './view'
import model from './model'
import intent from './intent'


const run = label => event => {
  view(model(intent([label, event])))
}


export default run
