import './Hero.css';
import hero from '../assets/hero2.png';


function Hero() {
    return (
        <>

        
            <div className="hero-container">
                <div className="left-hero">
                    <h3 className='sub-text1'>Careers</h3>
                    <h1 className='sub-text2'>
                    Careers at Fivium It all comes back to team
                    </h1>
                    <p>
                        From a small team of enterprising graduates who recognised and 
                        believed in the benefits of working with users from the outset 
                        in an agile and collaborative way, to a vibrant, 
                        successful and progressive team whose principles continue 
                        to guide our thriving business.
                    </p>
                </div>
                <img className='hero-img' src={hero} alt="Hero" />
               
            </div>

            <div className='hero-container2'>
                <h1 className='sub-text3'>Placement from university including</h1>
                <p className='sub-text5'>
                The strength of our team lies in the powerful combination of expertise, 
                integrity and authenticity. Our steady growth over the last two decades has 
                meant the solid foundations on which it was built 
                remain true and present today, with an exciting future landscape to explore and develop.
                </p>
            </div>
        </>
    );
}

export default Hero;
