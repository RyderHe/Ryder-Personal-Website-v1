import "./Portfolio.css";

const Portfolio = (props) => {
  return (
    <section id="portfolio">

      <h1 className="portfolio_header">Check Out Some of My Projects.</h1>
        
      <div className="portfolio_container">
        <div key={1} className="portfolio_item">
          <a href="https://github.com/RyderHe" title={"projects.title"}>
            <img alt={"projects.title"} src={`${process.env.PUBLIC_URL}/images/profile_photo.jpg`} />
            <div className="portfolio_item__overlay___wrapper">
              <div className="portfolio_item__overlay___meta">
                <h5>projects.title</h5>
                <p>projects.category</p>
              </div>
            </div> 
            <div className="portfolio_item__link-icon"><i className="fa fa-link"></i></div>
          </a>
        </div>
        <div key={1} className="portfolio_item">
          <a href="https://github.com/RyderHe" title={"projects.title"}>
            <img alt={"projects.title"} src={`${process.env.PUBLIC_URL}/images/profile_photo.jpg`} />
            <div className="portfolio_item__overlay___wrapper">
              <div className="portfolio_item__overlay___meta">
                <h5>projects.title</h5>
                <p>projects.category</p>
              </div>
            </div> 
            <div className="portfolio_item__link-icon"><i className="fa fa-link"></i></div>
          </a>
        </div>
        <div key={1} className="portfolio_item">
          <a href="https://github.com/RyderHe" title={"projects.title"}>
            <img alt={"projects.title"} src={`${process.env.PUBLIC_URL}/images/profile_photo.jpg`} />
            <div className="portfolio_item__overlay___wrapper">
              <div className="portfolio_item__overlay___meta">
                <h5>projects.title Prediction djk</h5>
                <p>projects.category</p>
              </div>
            </div> 
            <div className="portfolio_item__link-icon"><i className="fa fa-link"></i></div>
          </a>
        </div>
        <div key={1} className="portfolio_item">
          <a href="https://github.com/RyderHe" title={"projects.title"}>
            <img alt={"projects.title"} src={`${process.env.PUBLIC_URL}/images/profile_photo.jpg`} />
            <div className="portfolio_item__overlay___wrapper">
              <div className="portfolio_item__overlay___meta">
                <h5>projects.title</h5>
                <p>projects.category</p>
              </div>
            </div> 
            <div className="portfolio_item__link-icon"><i className="fa fa-link"></i></div>
          </a>
        </div>
        <div key={1} className="portfolio_item">
          <a href="https://github.com/RyderHe" title={"projects.title"}>
            <img alt={"projects.title"} src={`${process.env.PUBLIC_URL}/images/profile_photo.jpg`} />
            <div className="portfolio_item__overlay___wrapper">
              <div className="portfolio_item__overlay___meta">
                <h5>projects.title</h5>
                <p>projects.category</p>
              </div>
            </div> 
            <div className="portfolio_item__link-icon"><i className="fa fa-link"></i></div>
          </a>
        </div>
        <div key={1} className="portfolio_item">
          <a href="https://github.com/RyderHe" title={"projects.title"}>
            <img alt={"projects.title"} src={`${process.env.PUBLIC_URL}/images/profile_photo.jpg`} />
            <div className="portfolio_item__overlay___wrapper">
              <div className="portfolio_item__overlay___meta">
                <h5>projects.title</h5>
                <p>projects.category</p>
              </div>
            </div> 
            <div className="portfolio_item__link-icon"><i className="fa fa-link"></i></div>
          </a>
        </div>
       

      </div>
    </section>
  );
    
}

export default Portfolio;