import "./Resume.css";
import Experience from "../../components/Experience/Experience";
import Projects from "../../components/Projects/Projects";

const Resume = (props) => {
  const { resumeData, projectsData } = props;
  return (
    <section id="resume">
      <Experience resumeData={ resumeData }/>
      <Projects projectsData={ projectsData }/>
    </section>
  )
}

export default Resume;