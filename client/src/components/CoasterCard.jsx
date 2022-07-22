import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CoasterCard = () => {

//     const [selectedCoaster, setCurrentCoaster] = useState(null)
//     const [coasterDetails, setCoasterDetails] = useState(null)
//     let {coasterId} = useParams()

// useEffect(() => {
//     let chosenCoaster = props.coasters.find((coaster) =>
//         coaster.id === parseInt(coasterId)
//     )
//     setCurrentCoaster(chosenCoaster)
// }, [props.coasters, coasterId])


const [rollercoasters, setRollercoasters] = useState([])

const getRollercoasters = async () => {
    const res = await axios.get(
        `http://localhost:3001/62daaf03f437d4b08ac3ac1e`
    )
    console.log(res.data.currentCoaster)
    setRollercoasters(res.data.currentCoaster)
}
useEffect(() => {
    getRollercoasters()
}, [])
console.log(rollercoasters)



    // return (
    //     <div className="coaster-card" onClick={(props.onClick)}>

    //         <div className="img-wrapper">
    //             <img src={props.image} alt={props.name}/>
    //         </div>
    //         <div className="info-wrapper flex-col">
    //             <h1>{props.name}</h1>
    //             <h2>{props.location}</h2>
    //             <h3>{props.dateBuilt}</h3>
    //             <h3>{props.themeOfRide}</h3>
    //             <h3>{props.topSpeed}</h3>
    //             <h3>{props.dropLength}</h3>
    //             <p>{props.description}</p>
    //             <input>{props.review}</input>
    //         </div>
    //     </div>
    // )
    return (
        <div className='coaster-card' >
            <div className='img-wrapper'>
                <img src='https://rcdb.com/19525.htm#'/>
            </div>
            <div className='info-wrapper flex-col'>
                <h1>'Rampage'</h1>
                <h2>'Alabama Adventure and Splash Adventure'</h2>
                <h3>'1998'</h3>
                <h3>'Destruction and Chaos'</h3>
                <h3>'56 mph'</h3>
                <h3>'Drop is 102.0 feet'</h3>
                <h3>'A wooden rollercoaster who`s sole purpose is that of a bull in a china shop!'</h3>
            </div>
        </div>
    )
}

export default CoasterCard;