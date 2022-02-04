import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = (props) => {
  const { projectsData } = props;

  return (
    <div id="projects">

      <h1 className="projects_header">Check Out Some of My Projects.</h1>
        
      <div className="projects_container">
        { projectsData.map((project, index) => <ProjectCard key={index} projectData={project} />)}

        {/* <div key={1} className="projects_item">
          <a href="https://github.com/RyderHe" title={"projects.title"} target="_blank"  rel="noreferrer">
            <img alt={"projects.title"} src={`${process.env.PUBLIC_URL}/images/profile_photo.jpg`} />
            <div className="projects_item__overlay___wrapper">
              <h5>Chat App</h5>
              <p>A clone game - Fly the &#39;spyderman&#39; as far as you can!</p>
              <div className="used-skills">
                <p>Javascript</p>
                <p>PHP</p>
                <p>Vue</p>
                <p>Python</p>
                <p>Javascript</p>
                <p>Vue</p>
              </div>
              <div className="projects_item__link-icon"><i className="fa fa-link"></i></div>
            </div>
          </a>
        </div>
        <div key={1} className="projects_item">
          <a href="https://github.com/RyderHe" title={"projects.title"} target="_blank"  rel="noreferrer">
            <img alt={"projects.title"} src={`${process.env.PUBLIC_URL}/images/profile_photo.jpg`} />
            <div className="projects_item__overlay___wrapper">
              <h5>Ludum Dare Game Prediction Kaggle Challenge</h5>
              <p>Predicted with a categorization accuracy of 0.92+ that ranked top 50% among the class competition.</p>
              <div className="used-skills">
                <p>Javascript</p>
                <p>PHP</p>
                <p>Vue</p>

              </div>
              <div className="projects_item__link-icon"><i className="fa fa-link"></i></div>
            </div> 
          </a>
        </div> */}
       

      </div>
    </div>
  );
    
}

export default Projects;