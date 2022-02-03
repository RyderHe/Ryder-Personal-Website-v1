
import "./Home.css";
import Banner from "../../components/Banner/Banner";
// import ArrowDownBtn from "../../components/ArrowDownBtn/ArrowDownBtn";

const Home = (props) => {
  const { name, occupation, description, socialNetworks} = props.mainData;
  // console.log("Home", props.mainData);
  return (
    <section id="home">  
      <Banner name={name} occupation={occupation} description={description} socialNetworks={socialNetworks} />
      {/* <Banner /> */}
    </section>
  );
}

export default Home;