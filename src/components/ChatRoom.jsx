import { useContext, useEffect } from "react";
import { SettingsContext } from "../contexts/Settings";
import createConnection, { logVisit } from "../utils/connection";

// const serverUrl = "https://localhost:1234";
// const roomId = "general";

export default function ChatRoom({ roomId, selectedServerUrl }) {
  const settings = useContext(SettingsContext);
  const serverUrl = selectedServerUrl ?? settings.defaultServerUrl;

  // we just need to give 2 codes -> 1. what to run when connecting to external systems
  // 2. what to run when disconnecting from the external systems and react will do the rest
  console.log("rendering...");
  useEffect(() => {
    // synchoronize with external chat server
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    console.log(`Synchronozing with ${roomId}`);

    logVisit(roomId, serverUrl);

    //logVisit(roomId); // this is wrong as it would rerun on only serverUrl change also

    // cleanup
    return () => {
      // component cleanup happens in next rerender
      // component cleanup -> connection code run with new state
      console.log(`Stop Synchronozing with ${roomId}`);
      connection.disconnect();
    };
  }, [roomId, serverUrl]);
 
  // // need to write separate useEffect for different sync process
  // useEffect(() => {
  //   logVisit(roomId);
  // }, [roomId]);

  return <h1>Welcome to the {roomId} room!</h1>;
}
