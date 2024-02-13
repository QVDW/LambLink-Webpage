import { Link } from 'react-router-dom';

import ErrorImg from './img/NoPage.png';

const FAQ = () => {
    return (
        <div id="noPage">
            <Link to="/"><img src={ErrorImg} alt="404 Error" id="noPageImg"/></Link>
        </div>
    );
}

export default FAQ;