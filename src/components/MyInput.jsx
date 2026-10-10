import { forwardRef, useImperativeHandle, useRef } from "react";

function MyInput(props, ref) {
  const realInputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus(){ // for imperative restricted access
      realInputRef.current.focus();
    }
  }));

  return <input ref={realInputRef} {...props} />;
}

const ForwardedMyInput = forwardRef(MyInput);

export default ForwardedMyInput;
