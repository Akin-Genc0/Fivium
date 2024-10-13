import './Nav.css';
import logo from '../assets/icon1.png'

function Nav() {

    return (
        <>
        
        <div className='nav-con'>


            <nav>
                <div className='left'>
            <img src={logo}/>
            <h1>Fivium</h1>
            </div>
            <ul className='lists'>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Working at Fivium</a></li>
            <li><a href="#">Our culture </a></li>
            <li><a href="#">Vacation</a></li>
            
            </ul>

            <button className='nav-button'>Apply CV</button>

            </nav>
            </div>

       
 
        </>
    );
}

export default Nav;
