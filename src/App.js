

import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";

function App() {
  
  const [resumeData, setResumeData] = useState({});
  // const [isLoading, setIsLoading] = useState(undefined);
  const [fetchSuccess, setFetchSuccess] = useState(undefined);

  
  useEffect(() => {
    /**
    * Fetch the my data from the "fake" API, and update the states
    * @param   {void}
    * @return  {void}
    */
    async function getResumeData() {
      try {
        // setIsLoading(true);
        const response = await fetch("./resumeData.json", {
          headers: {
            "Accept": "application/json"
          }
        });
        const data = await response.json();
        setResumeData(data);
        // setIsLoading(false);
        setFetchSuccess(true);
        console.log("now: ", resumeData);
      } catch (err) {
        console.error("Failed to fetch resumeDate");
        setFetchSuccess(false);
      }
    }
    console.log("useEffect")
    getResumeData();
    // eslint-disable-next-line
  }, [fetchSuccess]);

  if (fetchSuccess) {
    return (
      <div className="App">
        <Header mainData = { resumeData.main }/>
        <About></About>
        <Resume></Resume>
        <Portfolio />
        <Footer />
        {/* <header></header>
        <section id="about"></section>
        <section id="resume"></section>
        <section id="portfolio"></section>
        <footer></footer> */}
      </div>
    );

  } 
  return <h1>Loading</h1>
}

export default App;
