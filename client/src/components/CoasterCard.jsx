const CoasterCard = (props) => {

    return (
        <div className="card coaster-card">
            <div className="card-header">
                <h3>{props.coaster.name}</h3>
            </div>

            <div className="img-wrapper">
                <img src={props.coaster.image} alt={props.coaster.name} />
            </div>

            <div className="card-body flex-col">
                <ul>
                    <li>Date Built:{props.coaster.date}</li>
                    <li>Location:{props.coaster.location}</li>
                    <li>Theme: {props.coaster.theme}</li>

                </ul>

            </div>

        </div>

    )

}

export default CoasterCard;