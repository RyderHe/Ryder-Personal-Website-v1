import "./SocialNetworksList.css";

const SocialNetworksList = (props) => {
  const { socialNetworks } = props;
  return (
    <ul className="social">
      {socialNetworks.map(function(social){
        console.log(social);
        return (<li key={social.name}><a href={social.url}><i className={social.className}></i></a></li>);
      }) }
    </ul>
  )
}

export default SocialNetworksList;