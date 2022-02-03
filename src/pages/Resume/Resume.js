import "./Resume.css";
import Experience from "../../components/Experience/Experience";
import Projects from "../../components/Projects/Projects";

const Resume = () => {
  return (
    <section id="resume">
      <Experience />
      <Projects />
    </section>
  )
}

export default Resume;