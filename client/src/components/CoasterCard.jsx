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
        `http://localhost:3001/62dac400f4328d12e277917c
        `
    )
    console.log(res.data.currentCoaster)
    setRollercoasters(res.data.currentCoaster)
}
useEffect(() => {
    getRollercoasters()
}, [])
console.log(rollercoasters)

// useEffect(() => {
//     let chosenCoaster = props.coasters.find((coaster) =>
//         coaster.id === parseInt(coasterId)
//     )
//     setCurrentCoaster(chosenCoaster)
// }, [props.coasters, coasterId])






    return (
        <div className='coaster-card' >
            <div className='img-wrapper'>
                <img src={rollercoasters.image}/>
            </div>
            <div className='info-wrapper'>
            <div className='coaster-name'>
            <h1>{rollercoasters.name}</h1>
            </div>
                <div className='location'>
                <h2>{rollercoasters.location}</h2>
                <br/><h4>Date Built:</h4><br/> <p>{rollercoasters.dateBuilt}</p>
                <br/><h4>Theme:</h4><br/> <p> {rollercoasters.themeOfRide}</p>
                <br/><h4>Top Speed:</h4><br/><p> {rollercoasters.topSpeed}</p>
                <br/><h4>Drop:</h4><br/><p> {rollercoasters.dropLength}</p>
                <br/><h4>About:</h4><br/><p>{rollercoasters.description}</p>
                </div>
            </div>
        </div>
        // <div className="coaster-card" onClick={(props.onClick)}>

        //     <div className="img-wrapper">
        //         <img src={rollercoasters.image} alt={rollercoasters.name}/>
        //     </div>
        //     <div className="info-wrapper flex-col">
        //         <h1>{rollercoasters.name}</h1>
        //         <h2>{rollercoasters.location}</h2>
        //         <h3>{rollercoasters.dateBuilt}</h3>
        //         <h3>{rollercoasters.themeOfRide}</h3>
        //         <h3>{rollercoasters.topSpeed}</h3>
        //         <h3>{rollercoasters.dropLength}</h3>
        //         <p>{rollercoasters.description}</p>
        //         {/* <input>{props.review}</input> */}
        //     </div>
        // </div>
    )
}

export default CoasterCard;