import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";

function App() {
  
  const [resumeData, setResumeData] = useState({});
  // const [isLoading, setIsLoading] = useState(undefined);
  const [fetchSuccess, setFetchSuccess] = useState(undefined);

  /**
   * Fetch the my data from the "fake" API
   * @param   {void}
   * @return  {Promise}
   */
  
  useEffect(() => {
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
  }, [resumeData, fetchSuccess]);

  if (fetchSuccess) {
    return (
      <div className="App">
        <Header mainData = { resumeData.main }/>
        <About></About>
      </div>
    );

  } 
  return <h1>Loading</h1>
  
  

  
}

export default App;
