import "./About.css";

const About = (props) => {
  const { name, bio, address, email, image, resume } = props;
  return (
    <section id="about">
      <div className="about_container">
        <div className="about__avatar">
          <img className="about__avatar___img"  src={`${process.env.PUBLIC_URL}/images/${image}`} alt="Ryder He Avatar" /> 
        </div>
        <div className="about__about-me">
          <h2 className="about__about-me___title">About Me</h2>
        
          <p className="about__about-me___p">{ bio }</p>
        </div> 
        <div className="about__contact-me">
          <h2 className="about__contact-me___title">Contact Details</h2>
          <ul className="about__contact-me___ul">
            <li>{ name }</li>
            <li>{ address.city }, { address.state }, CA</li>
            <li>{ email }</li>
          </ul>     
        </div>
        <div className="about__download-resume">
          <a href={`${process.env.PUBLIC_URL}/${resume}`} className="about__download-resume___button" download><i className="fas fa-download"></i> Download Resume</a>
        </div>
      </div>
  
    </section>
  )
}

export default About;