import "./Experience.css";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

const Experience = (props) => {
  const { resumeData } = props;
  const themes = ["education", "work"];

  return (
    <div id="experience">
      { themes.map( (theme, index) => <ExperienceCard key={index} theme={theme} records={resumeData[theme]}/>)}
    </div>
  );
}


export default Experience;