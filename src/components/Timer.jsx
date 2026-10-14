import { useEffect, useState, useEffectEvent } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const onTick = useEffectEvent(() => {
    setCount(c => c + increment);
  });

  useEffect(() => {
    console.log("hello");
    // setinterval doesn't needed to be assigned multiple times
    const timerId = setInterval(onTick, 1000);

    //cleanup
    return () => clearInterval(timerId);
  }, []); // if we pass onTick as dependancy as it's diff obj at each render it'll rerun

  return (
    <>
      <h1>
        Counter: {count}
        <button onClick={() => setCount(0)}>Reset</button>
      </h1>
      <hr />
      <p>
        Every second, increment by:
        <button
          disabled={increment === 0}
          onClick={() => setIncrement((i) => i - 1)}
        >
          –
        </button>
        <b>{increment}</b>
        <button onClick={() => setIncrement((i) => i + 1)}>+</button>
      </p>
    </>
  );
}
