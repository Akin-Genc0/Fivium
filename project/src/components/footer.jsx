
import './footer.css';
import footer from '../assets/footer-img.png'


function Footer() {
    return (
        
        <footer className="footer-container">


            <div className='section1'>
                <ul className='footer-list1'>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">eCase</a></li>
                    <li><a href="#">Fivium Digital</a></li>
                </ul>
            </div>

            <div className='section2'>
                <ul className='footer-list2'>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Working at Fivium</a></li>
                    <li><a href="#">Our culture</a></li>
                    <li><a href="#">Vacancies</a></li>
                </ul>
            </div>

            <div className='section3'>
                <ul className='footer-list3'>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Certifications</a></li>
                    <li><a href="#">Carbon Reduction Plan</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </div>

            <div className='section4'>
            <img className='footer-img' src={footer} alt="Fivium Logo" />
    <ul className='footer-list4'>
    
        <li>0800 3689 345</li>
        <li><a href="">enquiries@fivium.co.uk</a></li>
        <li><a href="https://maps.app.goo.gl/rmS8sn2MCZHr8ma29" target="_blank">15 Adam Street</a></li>
        <li><a href="https://maps.app.goo.gl/8rdt7jc5UAPSGTRU6" target="_blank">London WC2N 6AH</a></li>
        <li><a href="#">Cookies</a></li>
        <li><a href="#">Privacy statement</a></li>
        <li><a href="#">Modern slavery statement</a></li>
    </ul>
</div>


        </footer>
    );
}

export default Footer;

