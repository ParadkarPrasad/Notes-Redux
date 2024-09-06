import {useEffect} from "react"
// import noteService from "./services/notes"
// import { setNotes } from "./reducers/noteReducer"
import { useDispatch } from "react-redux"
import NewNotes from "./components/NewNotes"
import Notes from "./components/Notes"
import VisibilityFilter from "./components/VisibilityFilter"
import { initializeNotes } from "./reducers/noteReducer"
const App = () => {
 const dispatch = useDispatch()
 useEffect(()=>{
  dispatch(initializeNotes())
 },[dispatch])
  return(
    <div>
      <NewNotes />
      <VisibilityFilter/>
      <Notes />
    </div>
  )
  
}

export default App