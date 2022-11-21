import './Navbar.css';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';

function Navbar() {
    return(
        <nav className="Navbar">

            <img src="../tracer.png"></img>
            <ul>
                <CustomLink to="/">General</CustomLink>
                <CustomLink to="/form">Input</CustomLink>
                <CustomLink to="/historic">Historic</CustomLink>
                <CustomLink to="/calendar">Calendar</CustomLink>
                <CustomLink to="/graph">Graph</CustomLink>               
            </ul>
        </nav>
)
}

function CustomLink( to: any ) {
    const resolvedPath = useResolvedPath(to.to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    
    return (
        <li className={ isActive ? "active" : "" }>
            <Link to={to.to}> { to.children } </Link>
        </li>
    )
}


export default Navbar;