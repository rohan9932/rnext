import { useState } from "react";
// eslint-disable-next-line react/prop-types

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "dhaka") {
        resolve();
      } else {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      }
    }, 3000);
  });
}

export default function Form() {
  // visual states: empty, typing, submitting, success, error

  // updated visual states: typing, submitting, success

  // mandatory data state
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);

  // visual state theke pawa final state
  const [status, setStatus] = useState("typing");

  if (status === "success") return <h1>Thats right!</h1>;

  function handleTextChange(e) {
    setError(null);
    setAnswer(e.target.value);
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err.message);
    }
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <textarea value={answer} onChange={handleTextChange} disabled={status === 'submitting'}></textarea>
        <br />
        <button disabled={answer.length === 0 ||status === 'submitting'}>Submit</button>
        {status === 'submitting' && <p>Loading...</p>}
        {error && <p className="Error">{error}</p>}
      </form>
    </>
  );
}
