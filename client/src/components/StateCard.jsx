import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const StateCard = (props) => {

const [state, setState] = useState([])
let {stateId} = useParams()


const getState = async () => {
    const res = await axios.get(
        `http://localhost:3001/state/${stateId}`
    )
    console.log(res.data.currentState)
    setState(res.data.currentState)
}
useEffect(() => {
    // getState()
}, [])
console.log(state)

return (
    <div className="state-card" >
        <div className="info-wrapper flex-col">
            <h1>{state.name}</h1>
        </div>
    </div>
    )
}

export default StateCard 
