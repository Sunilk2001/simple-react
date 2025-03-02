import { useState } from "react"
import HelloWorld from "./componets/hello-world"
import PassProps from "./componets/pass-props";
import Day2 from "./componets/day-2";
import Day3ApiCall from "./componets/day-3";
import Home from "./componets/home";
import About from "./componets/about";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [storeData, setStoreData] = useState('');

  return (
    <>
      {/* <div className="container">
        <div className="row">
          <PassProps handleProps={(data) => (setStoreData(data))} />
          <HelloWorld data={storeData} />
          <Day2 />
          <Day3ApiCall />
          <Home />
          <About />
        </div>
      </div> */}
      <div className="container">
        <div className="row">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App
