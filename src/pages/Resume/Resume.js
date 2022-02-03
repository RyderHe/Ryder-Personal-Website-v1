import "./Resume.css";
import Experience from "../../components/Experience/Experience";
import Projects from "../../components/Projects/Projects";

const Resume = (props) => {
  const { educationData, workData, projectsData } = props;
  return (
    <section id="resume">
      <Experience educationData={ educationData } workData={ workData }/>
      <Projects projectsData={ projectsData }/>
    </section>
  )
}

export default Resume;