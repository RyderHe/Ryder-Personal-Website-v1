import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="about_container">
        <div className="about__avatar">
          <img className="about__avatar___img"  src={`${process.env.PUBLIC_URL}/images/profile_photo.jpg`} alt="Ryder He Avatar" /> 
        </div>
        {/* <div className=""> */}
        <div className="about__about-me">
          <h2 className="about__about-me___title">About Me</h2>
        
          <p className="about__about-me___p">Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.  </p>
        </div> 
        <div className="about__contact-me">
          <h2 className="about__contact-me___title">Contact Details</h2>
          <ul className="about__contact-me___ul">
            <li>Ryder He</li>
            <li>Toronto, ON, CA</li>
            <li>email</li>
          </ul>     
        </div>
        <div className="about__download-resume">
          <a href={`${process.env.PUBLIC_URL}/images/resume.pdf`} className="about__download-resume___button" download><i className="fas fa-download"></i> Download Resume</a>
        </div>
        {/* <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">

                <span>email</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={`${process.env.PUBLIC_URL}/images/resume.pdf`} className="button" download><i className="fas fa-download"></i>Download Resume</a>
              </p>
            </div>
          </div>
        </div> */}
      </div>
  
    </section>
  )
}

export default About;