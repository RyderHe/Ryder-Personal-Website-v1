import "./Experience.css";

const Experience = (props) => {
  // const { educationData, workData } = props;
  return (
    <div id="experience">
      
      {/* education */}
      <div className="experience-theme_container">
        <div className="experience-theme__header">
          <h1 className="experience-theme__header___h1">Education</h1>
        </div>
  
        <div className="experience-theme__entries">
          <div className="experience_theme__entries___row" key={1}>
            <h3>University of Waterloo</h3>
            <p className="info">Masters in Beer tasting <span>&bull;</span><em className="date">2020 Dec</em></p>
            <p className="description">Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>
          </div>

          <div className="experience_theme__entries___row" key={2}>
            <h3>University of Waterloo</h3>
            <p className="info">Masters in Beer tasting <span>&bull;</span><em className="date">2020 Dec</em></p>
            <p className="description"> Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>
          </div>
        </div>
      </div>

      {/* work */}
      <div className="experience-theme_container">
        <div className="experience-theme__header">
          <h1 className="experience-theme__header___h1">Education</h1>
        </div>
  
        <div className="experience-theme__entries">
          <div className="experience_theme__entries___row" key={1}>
            <h3>University of Waterloo</h3>
            <p className="info">Masters in Beer tasting <span>&bull;</span><em className="date">2020 Dec</em></p>
            <p className="description">Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>
          </div>

          <div className="experience_theme__entries___row" key={2}>
            <h3>University of Waterloo</h3>
            <p className="info">Masters in Beer tasting <span>&bull;</span><em className="date">2020 Dec</em></p>
            <p className="description"> Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Experience;