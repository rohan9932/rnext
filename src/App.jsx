import { useCallback, useMemo, useState } from "react";
import Button from "./components/Button";
import ShowCount from "./components/ShowCount";
import Title from "./components/Title";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // as these are func they are sent as diff obj ref so to prevent this
  // we need useCallback (memoize function)
  const incrementByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);

  const incrementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) {
      i += 1;
    }

    return count1 % 2 === 0; // Memoizing only the return value -> only recalculates if dependency changes
  }, [count1]);

  return (
    <div className="app">
      <Title />
      <ShowCount count={count1} title="Counter 1" />
      <span>{isEven ? "Even" : "Odd"}</span>

      <Button handleClick={incrementByOne}>Increment by one</Button>
      <hr />
      <ShowCount count={count2} title="Counter 2" />
      <Button handleClick={incrementByFive}>Increment by five</Button>
    </div>
  );
}

export default App;
