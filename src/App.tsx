import './App.css'
import { Routes, Route } from 'react-router-dom'
import NotesList from './NotesList'
import NoteDetail from './NoteDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<NotesList />} />
      <Route path="/note/:id" element={<NoteDetail />} />
    </Routes>
  )
}

export default App
