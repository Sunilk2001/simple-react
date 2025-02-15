import { useState } from "react"
import HelloWorld from "./componets/hello-world"
import PassProps from "./componets/pass-props";

function App() {

  const [storeData, setStoreData] = useState('');

  return (
    <>
      <div className="container">
        <div className="row">
          <PassProps handleProps={(data) => (setStoreData(data))} />
          {/* <HelloWorld data={storeData}/> */}
        </div>
      </div>
    </>
  )
}

export default App
