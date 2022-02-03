import "./Banner.css";
import SocialNetworksList from "../SocialNetworksList/SocialNetworksList";

const Banner = (props) => {
  // const { name, address, occupation, description, socialNetworks } = props;
  const socialNetworks = [{
    "name": "linkedin",
    "url": "https://www.linkedin.com/in/ruiying-he/",
    "className": "fa fa-linkedin"
  },
  {
    "name": "instagram",
    "url": "https://www.instagram.com/ryderhry/",
    "className": "fa fa-instagram"
  },
  {
    "name": "github",
    "url": "https://github.com/RyderHe",
    "className": "fa fa-github"
  }];
  return (
    <div className="banner">
      <div className="banner-text">
        <h1 className="responsive-headline">I&apos;m Ryder He .</h1>
        <h3>I&apos;m a <span>Software Developer</span>. Here will be your description. Use this to describe what you do or whatever you feel best describes yourself to a potential employer.</h3>
        <hr />
        <SocialNetworksList socialNetworks={socialNetworks}/>
      </div>
    </div>
  )
}

export default Banner;