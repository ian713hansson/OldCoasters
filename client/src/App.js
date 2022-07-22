import './App.css'
import { Routes, Route } from 'react-router-dom'
import CoasterCard from './components/CoasterCard'
import { useNavigate } from 'react-router-dom'
import Header from './components/Header'
import StateCard from './components/StateCard'

function App() {
  return (
    <div>
      {/* <Header /> */}
      <main>
        <Routes>
          {/* <Route path="/coasters/:id" element={<CoasterCard />} /> */}
          <Route path="/" element={<StateCard />} />
        </Routes>
      </main>
    </div>
  )
}
export default App
