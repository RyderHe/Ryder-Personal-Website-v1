import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic"  src="../../../public/images/profilepic.jpg" alt="Ryder He Avatar" />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
        
          <p>bio</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">

                <span>email</span>
                {/* <span>email</span> */}
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href="../../../public/Ryder Resume.pdf" className="button" download><i className="fas fa-download"></i>Download Resume</a>
              </p>
            </div>
          </div>
        </div>
      </div>
  
    </section>
  )
}

export default About;