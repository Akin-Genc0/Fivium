import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Mid from '../components/mid';
import Cards from '../components/cards';
import Map from '../components/map';
import Lower from '../components/lower';
import Join from '../components/join';
import Footer from '../components/footer';
import hero from '../assets/hero2.png';
import img1 from '../assets/hero5.png';
import img2 from '../assets/img2.jpg';

function Careers() {
  return (
    <div>
       <Nav/>
       <Hero 
                heading1="Careers"
                heading2=" Careers at Fivium It all comes back to team"
                paragraph1="From a small team of enterprising graduates who recognised and believed in the benefits of working with users from the outset in an agile and collaborative way, to a vibrant, successful and progressive team whose principles continue to guide our thriving business."
                paragraph2="The strength of our team lies in the powerful combination of expertise, integrity and authenticity. Our steady growth over the last two decades has meant the solid foundations on which it was built remain true and present today, with an exciting future landscape to explore and develop."
                imageSrc={hero}
            />
       <Mid 
                title1="Fundamental to our enduring spirit"
                text1="The continuous involvement of our founding Directors, who encourage an open dialogue across the team and support a constructive feedback loop. We believe the respect this creates is highly valued and acknowledged as critical to the success of the business. People drive this business, not profit."
                imgSrc1={img1}
                title2="It all comes back to team"
                text2="The strength of our team lies in the powerful combination of expertise, integrity, and authenticity. Our steady growth over the last two decades has meant the solid foundations on which it was built remain true and present today, with an exciting future landscape to explore and develop."
                imgSrc2={img2}
            />

            
       <Cards 
          title1="Careers at Fivium" 
          description1="Build modern web apps for high-profile government clients in the heart of London" 
          title2="Working at Fivium" 
          description2="To create an environment where individuals can be the best personal and professional versions of themselves requires investment and belief from leaders."
          title3="Our culture" 
          description3="Our collective efforts to create an amazing place to work have been externally recognised by Investors in People who have awarded Fivium their Gold Standard."
          title4="Work with us" 
          description4="If you're an IT expert or want to become one, and if you want to develop applications that will make the world a better, safer, and fairer place, work with us."
       />
    
       <Map/>
       <Lower/>
       <Cards 
        title1="More Benefits" 
        description1="Available after completing your probation period, confirming eligibility for full benefits." 
        title2="Training" 
        description2="Fivium recognises the importance of the work that its staff undertakes and realises that this contributes to our overall success. On this basis there is in place a non-contractual and wholly discretionary profit share scheme* which is designed to reward you for your efforts and contribution."
        title3="Profit share scheme" 
        description3="Fivium recognises the importance of the work that its staff undertakes and realises that this contributes to our overall success. On this basis there is in place a non-contractual and wholly discretionary profit share scheme* which is designed to reward you for your efforts and contribution."
        title4="EMI share options scheme" 
        description4="Fivium have an enterprise management incentive share scheme which gives key employees the opportunity to own options over shares in the company. The scheme is offered at the directors’ discretion and usually only made available after three years of service."
        showButtons={false} // Hide buttons for this instance
        titleTextSize="small-title" // Pass a class for smaller title text size
        containerClass="second-instance" // Pass a custom class for second instance
       />
        <Join/>
        <Footer/>
    </div>
   
  );
}

export default Careers;

