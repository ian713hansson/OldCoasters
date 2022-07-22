const StateCard = (props) => {

    return (
        <div className="state-card" onClick={(props.onClick)}>

            <div className="img-wrapper">
                <img src={props.image} alt={props.name}/>
            </div>
            <div className="info-wrapper flex-col">
                <h1>{props.name}</h1>
            </div>
        </div>
    )
}

export default StateCard 
