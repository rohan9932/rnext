import { useState } from "react";

export default function Form() {
  const [inputs, setInputs] = useState([{
    id: 1, label: 'input'
  }]);

  function handleAddInput() {
    setInputs([
      ...inputs, //would needed deep copy if values here needed to be modifying
      { id: inputs[inputs.length - 1].id + 1, label: "input" }
    ]);
  }

  return (
    <div>
      {
        inputs.map((input) => {
          return (
            <>
              <div
                key={input.id}
                style={{
                  marginBottom: "5px",
                }}
              >
                <input type="text" label={input.label} />
              </div>
            </>
          )
        })
      }

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleAddInput}>Add Input</button>
      </div>
    </div>
  );
}
