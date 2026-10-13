import { useState } from "react";

export default function Example7({ onChange }) {
  const [isOn, setIsOn] = useState(false);

  // 🔴 Avoid: The onChange handler runs too late
  // useEffect(() => {
  //     onChange(isOn); // parent ke janaye deya
  // }, [isOn, onChange]);

  const handleToggle = () => {
    onChange(!isOn);
    setIsOn(!isOn);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
}
