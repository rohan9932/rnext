export default function wrapPromise(promise) {
  let status = "pending";
  let response;
  
  const suspender = promise.then(
    (res) => {
      status = "success"; // when the prev promise is resolved just send the data for rendering jsx
      response = res; // updates the same ref. status (closure concept)
    },
    (error) => {
      status = "error"; //sending error
      response = error;
    },
  );

  // writing read so that we can do all the works from one place
  const read = () => {
    switch (status) {
      case "pending":
        throw suspender; //throwing promise for loading state in first render

      case "error":
        throw response; //throwing error for error boundary

      default:
        return response; //returning response if data is loaded successfully
    }
  };

  return {
    read,
  };
}
