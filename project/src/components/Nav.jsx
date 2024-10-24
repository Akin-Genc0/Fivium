import './Nav.css';
import logo from '../assets/icon1.png'
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <>
        
        <div className='nav-con'>


            <nav>
                <div className='left'>
                <Link to="/" className="header-link"> 
                    <img src={logo} alt="Fivium Logo" />
                    <h1>Fivium</h1>
                    </Link>
            </div>
            <ul className='lists'>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Working at Fivium</a></li>
            <li><a href="#">Our culture </a></li>
            <li><a href="#">Vacation</a></li>
            
            </ul>

            <Link to="/Vacation">
        <button className='nav-button'>Apply Now</button>
      </Link>

            </nav>
            </div>
            
       
 
        </>
    );
}

export default Nav;
