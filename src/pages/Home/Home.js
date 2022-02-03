
import "./Home.css";
import Banner from "../../components/Banner/Banner";
// import ArrowDownBtn from "../../components/ArrowDownBtn/ArrowDownBtn";

const Home = (props) => {
  // const { name, occupation, description, address, socialNetworks} = props.mainData;
  // console.log("Home", props.mainData);
  return (
    <section id="home">  
      {/* <NavBar />
      <Banner name={name} address={address} occupation={occupation} description={description} socialNetworks={socialNetworks} /> */}
      {/* <ArrowDownBtn /> */}
      <Banner />
    </section>
  );
}

export default Home;