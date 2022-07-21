import './App.css'
import { Routes, Route } from 'react-router-dom'
import CoasterCard from './components/CoasterCard'

function App() {
  return (
    <div>
      <h1> React homepage</h1>
      <Routes>
        <Route path="/" element={<CoasterCard />} />
      </Routes>
    </div>
  )
}

export default App
