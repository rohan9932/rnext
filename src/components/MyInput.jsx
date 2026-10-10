import { forwardRef } from "react";

function MyInput(props, ref) {
  return <input ref={ref} {...props} />;
}

const ForwardedMyInput = forwardRef(MyInput);

export default ForwardedMyInput;
