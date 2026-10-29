import { useState, useDebugValue } from "react";

export default function useStateDisplayName(intialVal, displayName) {
  const [value, setValue] = useState(intialVal);
  useDebugValue(`${displayName} for ${intialVal}`); // This will only work in the react dev tools, not in the console
  return [value, setValue];
}
