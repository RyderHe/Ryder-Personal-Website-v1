import "./Banner.css";
import SocialNetworksList from "../SocialNetworksList/SocialNetworksList";

const Banner = (props) => {
  const { name, occupation, description, socialNetworks } = props;
  return (
    <div className="banner">
      <div className="banner-text">
        <h1 className="responsive-headline">I&apos;m { name } .</h1>
        <h3>I&apos;m a <span>{ occupation }</span>. {description}</h3>
        {/* <hr /> */}
        <SocialNetworksList socialNetworks={socialNetworks}/>
      </div>
    </div>
  )
}

export default Banner;