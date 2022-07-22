import StateCard from "./StateCard"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'



export default function Header (props) {

  const [statesArray, setStatesArray] = useState([])

  const getAllStates = async () => {
    const res = await axios.get(
        `http://localhost:3001/states/`
    )
    console.log(res.data.allStates)
    setStatesArray(res.data.allStates)
  }
  useEffect(() => {
    // getAllStates()
  }, [])
  console.log(statesArray)


  return (
    <div>
      <h1>Old Coasters</h1>
      <br></br>
      <section className="state-map-container">
        {statesArray.map((currentState) => (
          <div>
            <StateCard stateId={currentState._id}/>
          </div>
        ))}
      </section>
    </div>
  )
}