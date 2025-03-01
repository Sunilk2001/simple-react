import { useState } from "react"
import HelloWorld from "./componets/hello-world"
import PassProps from "./componets/pass-props";
import Day2 from "./componets/day-2";

function App() {

  const [storeData, setStoreData] = useState('');

  return (
    <>
      <div className="container">
        <div className="row">
          {/* <PassProps handleProps={(data) => (setStoreData(data))} /> */}
          {/* <HelloWorld data={storeData}/> */}
          <Day2 />
        </div>
      </div>
    </>
  )
}

export default App
