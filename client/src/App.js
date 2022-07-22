import './App.css'
import { Routes, Route } from 'react-router-dom'
import CoasterCard from './components/CoasterCard'
import Header from './components/StateNav'

function App() {
  return (
    <div>
      <Header />
      <main>
      <Routes>
        {/* <Route path="/coasters/coaster/:id" element={<CoasterCard />} /> */}
        <Route path="/" element={<CoasterCard />} />
      </Routes>
      </main>
    </div>
  )
}
export default App
