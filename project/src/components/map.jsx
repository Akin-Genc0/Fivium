import './map.css';

function Map() {

    return (
        <>
   
        <div className='maps-container'> 
            <h1>Our office</h1>
<p>Our office is just off the Strand and near Covent Garden, meaning beautiful 
    surroundings, excellent eateries and great views over some of 
    London's most iconic landmarks. We're also close to several 
    tube stations and overground transport links.</p>

        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.190941301737!2d-0.12516702387231843!3d51.5097462105326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cb8d6d8cf5%3A0x7ff2a5b9637fba2f!2sFivium!5e0!3m2!1sen!2suk!4v1729344841459!5m2!1sen!2suk" 
  width="100%"
  height="600vw"
  style={{ border: 0 , borderRadius: '2vw'}}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>


    
        </div>

       
 
        </>
    );
}

export default Map;