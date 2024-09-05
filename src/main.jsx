import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux'
import { filterChange } from './reducers/filterReducers'
import { createNote } from './reducers/noteReducer'
import { Provider } from 'react-redux'

import App from './App'
import noteReducer from './reducers/noteReducer'
import filterReducer from './reducers/filterReducers'

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer
})
const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))
store.dispatch(filterChange('IMPORTANT'))
store.dispatch(createNote('combineReducers forms one reducer from many simple reducers'))
// ReactDOM.createRoot(document.getElementById('root')).render(

//   <Provider store={store}>
//     <App />

//   </Provider>
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)