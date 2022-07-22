import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const StateCard = (props) => {

    const [state, setState] = useState([])
    let {stateId} = useParams()


const getState = async () => {
    const res = await axios.get(
        `http://localhost:3001/state/62d9a73926e48c41f868f249`
    )
    console.log(res.data.currentState)
    setState(res.data.currentState)
}
useEffect(() => {
    getState()
}, [])
console.log(state)

return (
    <div className="state-card" >

        {/* <div className="img-wrapper">
            <img src={props.image} alt={props.name}/>
        </div> */}
        <div className="info-wrapper flex-col">
            <h1>Hello</h1>
        </div>
    </div>
    )
}

export default StateCard 
