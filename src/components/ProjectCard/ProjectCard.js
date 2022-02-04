const ProjectCard = (props) => {
  const { projectData } = props;
  return (
    <div className="projects_item">
      <a href={projectData.url} title={projectData.title} target="_blank"  rel="noreferrer">
        <img alt={projectData.title} src={`${process.env.PUBLIC_URL}/images/profile_photo.jpg`} />
        <div className="projects_item__overlay___wrapper">
          <h5>{projectData.title}</h5>
          <p>{projectData.category}</p>
          <div className="used-skills">
            {projectData.skills.map((skill, index) => <p key={index}>{skill}</p>)}
          </div>
          <div className="projects_item__link-icon"><i className="fa fa-link"></i></div>
        </div>
      </a>
    </div>
  )
}

export default ProjectCard;