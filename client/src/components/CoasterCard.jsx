import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CoasterCard = (props) => {

    const [selectedCoaster, setCurrentCoaster] = useState(null)
    const [coasterDetails, setCoasterDetails] = useState(null)
    let {coasterId} = useParams()

useEffect(() => {
    let chosenCoaster = props.coasters.find((coaster) =>
        coaster.id === parseInt(coasterId)
    )
    setCurrentCoaster(chosenCoaster)
}, [props.coasters, coasterId])
//THIS IS WHERE I WOULD PUT MY API CALL
//      IF I HAD ONE!!!!!

    // const [rollercoasters, setRollercoasters] = useState([])

    // const getRollercoasters = async () => {
    //     const res = await axios.get(
    //       'https://data.mongodb-api.com/app/data-spxce/endpoint/data/v1'
    //     )
    //     console.log(res.data.results)
    //     setRollercoasters(res.data.results)
    //   }
      
    //   useEffect(() => {
    //     getRollercoasters()
    //   }, [])
      
    //   console.log(rollercoasters)


    return (
        <div className="card coaster-card">
            <div className="card-header">
                <h3>I am a coaster</h3>
            </div>

            {/* <div className="img-wrapper">
                <img src={props.coaster.image} alt={props.coaster.name} />
            </div>

            <div className="card-body flex-col">
                <ul>
                    <li>Date Built:{props.coaster.date}</li>
                    <li>Location:{props.coaster.location}</li>
                    <li>Theme: {props.coaster.theme}</li>

                </ul>

            </div> */}

        </div>

    )

}

export default CoasterCard;