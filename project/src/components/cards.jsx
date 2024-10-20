import PropTypes from 'prop-types'; 
import './cards.css';

function Cards({ title1, description1, title2, description2, title3, description3, title4, description4, showButtons, titleTextSize, containerClass }) {
    return (
        <div className={`careers-section ${containerClass}`}>
            <section className="header">
                <h1>{title1}</h1>
                <p>{description1}</p>
            </section>

            <section className="cards-container">
                <div className="card1">
                    <h1 className={titleTextSize}>{title2}</h1>
                    <p>{description2}</p>
                    {showButtons && <button className="learn-more">Learn More</button>}
                </div>

                <article className="card2">
                    <h1 className={titleTextSize}>{title3}</h1>
                    <p>{description3}</p>
                    {showButtons && <button className="learn-more">Learn More</button>}
                </article>

                <article className="card3">
                    <h1 className={titleTextSize}>{title4}</h1>
                    <p>{description4}</p>
                    {showButtons && <button className="learn-more">Learn More</button>}
                </article>
            </section>
        </div>
    );
}

// Define the PropTypes for the Cards component
Cards.propTypes = {
    title1: PropTypes.string.isRequired,
    description1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    description2: PropTypes.string.isRequired,
    title3: PropTypes.string.isRequired,
    description3: PropTypes.string.isRequired,
    title4: PropTypes.string.isRequired,
    description4: PropTypes.string.isRequired,
    showButtons: PropTypes.bool,
    titleTextSize: PropTypes.string,
    containerClass: PropTypes.string, 
};

// Set default values for props
Cards.defaultProps = {
    showButtons: true,
    titleTextSize: '',
    containerClass: '', 
};

export default Cards;

