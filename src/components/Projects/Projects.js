import "./Projects.css";

const Projects = (props) => {
  return (
    <div id="projects">

      <h1 className="projects_header">Check Out Some of My Projects.</h1>
        
      <div className="projects_container">

        <div key={1} className="projects_item">
          <a href="https://github.com/RyderHe" title={"projects.title"}>
            <img alt={"projects.title"} src={`${process.env.PUBLIC_URL}/images/profile_photo.jpg`} />
            <div className="projects_item__overlay___wrapper">
              {/* <div className="projects_item__overlay___meta"> */}
              <h5>Chat App</h5>
              {/* <p>projects.category</p> */}
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
            {/* </div>  */}
          </a>
        </div>
        <div key={1} className="projects_item">
          <a href="https://github.com/RyderHe" title={"projects.title"}>
            <img alt={"projects.title"} src={`${process.env.PUBLIC_URL}/images/profile_photo.jpg`} />
            <div className="projects_item__overlay___wrapper">
              {/* <div className="projects_item__overlay___meta"> */}
              <h5>Chat App</h5>
              {/* <p>projects.category</p> */}
              <div className="used-skills">
                <p>Javascript</p>
                <p>PHP</p>
                <p>Vue</p>

              </div>
              {/* </div> */}
              <div className="projects_item__link-icon"><i className="fa fa-link"></i></div>
            </div> 
          </a>
        </div>
        <div key={1} className="projects_item">
          <a href="https://github.com/RyderHe" title={"projects.title"}>
            <img alt={"projects.title"} src={`${process.env.PUBLIC_URL}/images/profile_photo.jpg`} />
            <div className="projects_item__overlay___wrapper">
              {/* <div className="projects_item__overlay___meta"> */}
              <h5>Chat App</h5>
              {/* <p>projects.category</p> */}
              <div className="used-skills">
                <p>Javascript</p>
                <p>PHP</p>
                <p>Vue</p>

              </div>
              {/* </div> */}
              <div className="projects_item__link-icon"><i className="fa fa-link"></i></div>
            </div> 
          </a>
        </div>
        <div key={1} className="projects_item">
          <a href="https://github.com/RyderHe" title={"projects.title"}>
            <img alt={"projects.title"} src={`${process.env.PUBLIC_URL}/images/profile_photo.jpg`} />
            <div className="projects_item__overlay___wrapper">
              {/* <div className="projects_item__overlay___meta"> */}
              <h5>Chat App</h5>
              {/* <p>projects.category</p> */}
              <div className="used-skills">
                <p>Javascript</p>
                <p>PHP</p>
                <p>Vue</p>

              </div>
              {/* </div> */}
              <div className="projects_item__link-icon"><i className="fa fa-link"></i></div>
            </div> 
          </a>
        </div>
        <div key={1} className="projects_item">
          <a href="https://github.com/RyderHe" title={"projects.title"}>
            <img alt={"projects.title"} src={`${process.env.PUBLIC_URL}/images/profile_photo.jpg`} />
            <div className="projects_item__overlay___wrapper">
              {/* <div className="projects_item__overlay___meta"> */}
              <h5>Chat App</h5>
              {/* <p>projects.category</p> */}
              <div className="used-skills">
                <p>Javascript</p>
                <p>PHP</p>
                <p>Vue</p>

              </div>
              {/* </div> */}
              <div className="projects_item__link-icon"><i className="fa fa-link"></i></div>
            </div> 
          </a>
        </div>
        <div key={1} className="projects_item">
          <a href="https://github.com/RyderHe" title={"projects.title"}>
            <img alt={"projects.title"} src={`${process.env.PUBLIC_URL}/images/profile_photo.jpg`} />
            <div className="projects_item__overlay___wrapper">
              {/* <div className="projects_item__overlay___meta"> */}
              <h5>Chat App</h5>
              {/* <p>projects.category</p> */}
              <div className="used-skills">
                <p>Javascript</p>
                <p>PHP</p>
                <p>Vue</p>

              </div>
              {/* </div> */}
              <div className="projects_item__link-icon"><i className="fa fa-link"></i></div>
            </div> 
          </a>
        </div>
       

      </div>
    </div>
  );
    
}

export default Projects;