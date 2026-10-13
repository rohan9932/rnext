import "./App.css";
// import { useState } from "react";
// import Example7 from "./components/Example7";
// import Example8 from "./components/Example8";
import Example9 from "./components/Example9";
// import useSomeAPI from "./utils/useSomeAPI";

export default function App() {
  // const [isOn, setIsOn] = useState(false); // example 7
  // const data = useSomeAPI(); // example 8

  return (
    <div>
      {/* example 7 */}
      {/* <p>{isOn ? "On" : "Off"}</p>
      <Example7 onChange={setIsOn} /> */}

      {/* example 8 */}
      {/* <p>{data && data}</p>
      <Example8 data={data} /> */}
      <Example9 />
    </div>
  );
}
