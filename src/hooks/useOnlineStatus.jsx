import { useSyncExternalStore } from "react";

function subscribe(callback) {
  // subscribe
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);

  // cleanup
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

// when need to sync with external system and render we can use this instead of useEffect
// we only write subscribe function
// and then return it in useSyncExternalStore with 2nd param what will be rendered with in client
// and third param be what will be rendered with in server
export function useOnlineStatus() {
  // ✅ Good: Subscribing to an external store with a built-in Hook
  return useSyncExternalStore(
    subscribe, // React won't resubscribe for as long as you pass the same function
    () => navigator.onLine, // How to get the value on the client
    () => true // How to get the value on the server
  );
}
