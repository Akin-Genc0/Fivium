import './Job.css';

function Job() {
    return (
        <>
            <main className="job-container"> 
                
                <header className="job-header">  
                    <h1>Available Job Positions</h1>
                    <p>We are looking for talented individuals to join our team. Explore our current job openings and find the perfect role for you.</p>
                </header>

                <section className="job-listings">  
                    <article className="job-box">
                        <h2>Software Engineer</h2>
                        <p><strong>Location:</strong> Remote</p>
                        <p><strong>Type:</strong> Full-time</p>
                        <p>Develop modern web applications and collaborate with cross-functional teams to deliver high-quality software solutions.</p>
                    </article>

                    <article className="job-box">
                        <h2>Product Manager</h2>
                        <p><strong>Location:</strong> New York, USA</p>
                        <p><strong>Type:</strong> Full-time</p>
                        <p>Oversee product development from inception to delivery. Work closely with engineering and design teams to build innovative products.</p>
                    </article>

                    <article className="job-box">
                        <h2>UI/UX Designer</h2>
                        <p><strong>Location:</strong> London, UK</p>
                        <p><strong>Type:</strong> Part-time</p>
                        <p>Design intuitive and visually appealing user interfaces for web and mobile applications, focusing on user experience and accessibility.</p>
                    </article>
                </section>
            </main>
        </>
    );
}

export default Job;

