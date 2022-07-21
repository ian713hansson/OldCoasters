import {Link} from 'react-router-dom';

const StateNav = (props) => {
    return(
        <div className="state-nav">
            <button type="submit">{props.coasterId}</button>
        </div>
    )
}
export default StateNav;