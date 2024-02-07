import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

import ErrorImg from './img/Error404.png';

const FAQ = () => {
    return (
        <div id="error">
            <Link to="/"><img src={ErrorImg} alt="404 Error" /></Link>
        </div>
    );
}

export default FAQ;