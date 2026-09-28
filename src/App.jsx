import { useState } from "react";
import Mirror from "./components/Mirror";
import Form from "./components/Form";

function App() {
    const [color, setColor] = useState("red");

    const handleChangeColor = () => {
        setColor("blue");
    };

    return (
        <div>
            {/* <Mirror messageColor={color} />
            <br />
            <button onClick={handleChangeColor}>
                Change Color from Parent
            </button> */}
            <Form />
        </div>
    );
}

export default App;
