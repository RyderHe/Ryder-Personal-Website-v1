import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import Spinner from "./components/Spinner/Spinner";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Resume from "./pages/Resume/Resume";

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
        <NavBar />
        <Routes>
          <Route 
            path="/" 
            element={<Home mainData = { resumeData.main } />}>
          </Route>
          <Route 
            path="/about" 
            element={
              <>
                <About 
                  name = { resumeData.main.name }
                  bio={ resumeData.main.bio } 
                  address={ resumeData.main.address } 
                  email={ resumeData.main.email } 
                  image={ resumeData.main.image }
                  resume={ resumeData.main.resumedownload }
                />
                <Footer 
                  socialNetworks={ resumeData.main.socialNetworks}
                />
              </>
            }
          >
          </Route>
          <Route 
            path="/resume" 
            element={
              <>
                <Resume
                  resumeData={ resumeData.resume}
                  projectsData={ resumeData.portfolio.projects}
                />
                <Footer 
                  socialNetworks={ resumeData.main.socialNetworks}
                />
              </>
            }>
          </Route>
        </Routes>

      </div>
    );

  } 
  // return <Spinner />
  return <h1>Loading ...</h1>
}

export default App;
