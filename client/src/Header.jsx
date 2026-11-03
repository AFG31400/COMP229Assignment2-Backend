import {Link} from 'react-router-dom';
import img from './assets/logo.png'

function Header() {
    return (
        <header>
            <img src={img} alt="Logo" style={{height: '150px', width: 'auto' }} />
            <h2>Personal portfolio</h2>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About me</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/education">Education</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact me</Link></li>
                </ul>
            </nav>
            <hr />
        </header>
    );
}

export default Header;