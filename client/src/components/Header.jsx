import StateNav from '.StateNav/'



export default function Header (props) {
  return (
    <div>
      <h1>Old Coasters</h1>
      <br></br>
      <section className="state-map-container">
        {props.states.map((currentState) => (
          <div>
            <StateNav />
          </div>
        ))}
      </section>
    </div>
  )
}