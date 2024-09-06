import {useEffect} from "react"
import noteService from "./services/notes"
import { setNotes } from "./reducers/noteReducer"
import { useDispatch } from "react-redux"
import NewNotes from "./components/NewNotes"
import Notes from "./components/Notes"
import VisibilityFilter from "./components/VisibilityFilter"
const App = () => {
 const dispatch = useDispatch()
 useEffect(()=>{
  noteService.getAll().then(notes => dispatch(setNotes(notes)))
 },)
  return(
    <div>
      <NewNotes />
      <VisibilityFilter/>
      <Notes />
    </div>
  )
  
}

export default App