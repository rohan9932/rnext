import { useEffect, useState } from "react";


// used for reusibility -> taking reusable logics across components into a custom hook
// react allows hook usage in only components and custom hooks. and custom hook function's name
// should be started with "use"

// we're only sharing the logic not the state itself
// both component calls this hook using different isOnline version
// in effect: 
// 1. Each component gets its own isOnline state.
// 2. Events run independently in each component.
// 3. State changes in one component do not affect the other.
// 4. Both components use the exact same logic (from useOnlineStatus) without duplication.
export default function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);

  function handleOnline() {
    setIsOnline(true);
  }

  function handleOffline() {
    setIsOnline(false);
  }

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
}
