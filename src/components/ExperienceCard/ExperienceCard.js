import "./ExperienceCard.css";

const ExperienceCard = (props) => {
  const { theme, records } = props;

  return (
    <div className="experience-theme_container">

      <div className="experience-theme__header">
        <h1 className="experience-theme__header___h1">{ theme }</h1>
      </div>
  
      <div className="experience-theme__entries">
        { 
          records.map((record, index) => (
            <div className="experience_theme__entries___row" key={`${index} - ${theme}`}>
              <h3>{theme === "education" ? record.school : record.company}</h3>
              <p className="info">{theme === "education" ? record.degree : record.title} 
                <span>&bull;</span><em className="date">{theme === "education" ? record.graduated : record.years}</em>
              </p>
              <p className="description">{record.description}</p>
            </div>
          ))
        }
      </div>
    </div>

  )

} 

export default ExperienceCard;