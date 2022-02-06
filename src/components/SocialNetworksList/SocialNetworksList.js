import "./SocialNetworksList.css";

const SocialNetworksList = (props) => {
  const { socialNetworks } = props;
  return (
    <ul className="social">
      {socialNetworks.map(function(social){
        return (
          <li key={social.name}>
            <a href={social.url} target="_blank" rel="noopener noreferrer">
              <i className={social.className}></i>
            </a>
          </li>
        );
      }) }
    </ul>
  )
}

export default SocialNetworksList;