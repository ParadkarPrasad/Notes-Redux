import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { filterChange } from './reducers/filterReducers'
import { createNote } from './reducers/noteReducer'
import { Provider } from 'react-redux'
import App from './App'
import noteReducer from './reducers/noteReducer'
import filterReducer from './reducers/filterReducers'

const store = configureStore({
 reducer:{ notes: noteReducer,
  filter: filterReducer
 }
})


console.log(store.getState())
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