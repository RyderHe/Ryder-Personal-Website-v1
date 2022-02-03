import "./Footer.css";

const Footer = () => {

  return (
    <footer id="footer">
      {/* <div className="footer_container"> */}
      {/* <div id="footer__go-top">
          <a title="Back to Top" href="#home">
            <i className="fas fa-angle-up"></i>
          </a>
        </div> */}
      {/* <div className="footer__content"> */}

      <ul className="social">
        <li key={1}><a href="https://www.linkedin.com/in/ruiying-he/"><i className="fa fa-linkedin"></i></a></li>
        <li key={1}><a href="https://www.linkedin.com/in/ruiying-he/"><i className="fa fa-linkedin"></i></a></li>
        <li key={1}><a href="https://www.linkedin.com/in/ruiying-he/"><i className="fa fa-linkedin"></i></a></li>
      </ul>

      <p>&copy; Copyright { new Date().getFullYear() } Ryder He</p>   

      {/* </div> */}
      {/* </div> */}
    </footer>
  )

}

export default Footer;