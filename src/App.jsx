import { useRef } from "react";
import "./App.css";
import Form from "./components/Form";
import CatFriends from "./components/CatFriends";

function App() {
  const myRef = useRef(null);

  const handleScroll = () => {
    myRef.current.textContent = "Hello React";
  };

  return (
    <div>
      <div ref={myRef}>Hello</div>
      <button onClick={handleScroll}>Scroll to Div</button>
      <Form />
      <CatFriends />
    </div>
  );
}

export default App;
