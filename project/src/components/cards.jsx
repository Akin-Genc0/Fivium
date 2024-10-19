import './cards.css';

function Cards() {

    return (
        <>
   
  

        <div className="careers-section">
            <section className="header">
                <h1>Careers at Fivium</h1>
                <p>Build modern web apps for high-profile government clients in the heart of London</p>
            </section>

            <section className="cards-container">
                <div className="card1">
                    <h1>Working at Fivium</h1>
                    <p>
                    To create an environment where individuals can be the best personal and professional 
                    versions of themselves requires investment and belief from leaders. 
                    </p>
                    <button className="learn-more">Learn More</button>
                </div>

                <article className="card2">
                    <h1>Our culture</h1>
                    <p>
                        Our collective efforts to create an amazing place 
                        to work have been externally recognised by Investors 
                        in People who have awarded Fivium their Gold Standard.
                    </p>
                    <button className="learn-more">Learn More</button>
                </article>

                <article className="card3">
                    <h1>Work with us</h1>
                    <p>
                        If youre an IT expert or want to become one and 
                        if you want to develop applications that will make 
                        the world a better, safer and fairer place, work with us. 
                        It all comes back to team.
                    </p>
                    <button className="learn-more">Learn More</button>
                </article>
            </section>
        </div>
         
 
        </>
    );
}

export default Cards;