import "./ArrowDownBtn.css";

const ArrowDownBtn = (props) => {
  return (
    <p className="scrolldown">
      <a className="smoothscroll" href="#about"><i className="fas fa-caret-down"></i></a>
    </p>
  )
}

export default ArrowDownBtn;