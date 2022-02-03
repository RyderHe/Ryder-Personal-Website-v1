import "./Banner.css";
import SocialNetworksList from "../../../SocialNetworksList/SocialNetworksList";

const Banner = (props) => {
  const { name, address, occupation, description, socialNetworks } = props;
  return (
    <div className="row banner">
      <div className="banner-text">
        <h1 className="responsive-headline">I&apos;m {name} .</h1>
        <h3>I&apos;m a {address.city} based <span>{occupation}</span>. {description}.</h3>
        <hr />
        <SocialNetworksList socialNetworks={socialNetworks}/>
      </div>
    </div>
  )
}

export default Banner;