import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CoasterCard = (props) => {

    const [selectedCoaster, setCurrentCoaster] = useState(null)
    const [coasterDetails, setCoasterDetails] = useState(null)
    let {coasterId} = useParams()
    const [rollercoasters, setRollercoasters] = useState([])

const getRollercoasters = async () => {
    const res = await axios.get(
        `http://localhost:3001/${coasterId}`
    )
    console.log(res.data.currentCoaster)
    setRollercoasters(res.data.currentCoaster)
}
useEffect(() => {
    getRollercoasters()
}, [])
console.log(rollercoasters)

useEffect(() => {
    let chosenCoaster = props.coasters.find((coaster) =>
        coaster.id === parseInt(coasterId)
    )
    setCurrentCoaster(chosenCoaster)
}, [props.coasters, coasterId])






    return (
        <div className="coaster-card" onClick={(props.onClick)}>

            <div className="img-wrapper">
                <img src={rollercoasters.image} alt={rollercoasters.name}/>
            </div>
            <div className="info-wrapper flex-col">
                <h1>{rollercoasters.name}</h1>
                <h2>{rollercoasters.location}</h2>
                <h3>{rollercoasters.dateBuilt}</h3>
                <h3>{rollercoasters.themeOfRide}</h3>
                <h3>{rollercoasters.topSpeed}</h3>
                <h3>{rollercoasters.dropLength}</h3>
                <p>{rollercoasters.description}</p>
                {/* <input>{props.review}</input> */}
            </div>
        </div>
    )
}

export default CoasterCard;