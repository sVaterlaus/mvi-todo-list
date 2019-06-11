# MVI Todo List
This is an example app using a reactive Model-View-Intent pattern and an immutable data store.

## Setup:
- install dependencies: `npm i`
- run dev server: `npm start`

## Todo:
CODE
- [x] replace view's h() syntax with JSX
- [x] split up view layer into components
- [x] use import/export instead of require()
- [x] use event labels instead of classes

TESTS
- [ ] trigger multiple events from two different streams with artificially-long runtime processing to see if the events are processed in order of emission or not

FEATURES
- [ ] add basic styles
- [x] delete todos
- [x] complete todos, (move to "completed" section)
- [ ] reorder todos (drag & drop)
- [ ] persist todos with local database
- [ ] add user login with simple username/password auth
- [ ] add page/route handling

README
- [ ] add system diagram
- [ ] add explanation of data flow 
