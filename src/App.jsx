import { useState } from "react";
import ChatRoom from "./components/ChatRoom";
import { SettingsContext } from "./contexts/Settings";

export default function App() {
  const [roomId, setRoomId] = useState("general");
  const [showChat, setShowChat] = useState(true);
  const [serverUrl, setServerUrl] = useState(null);

  const handleRoomChange = (e) => {
    setRoomId(e.target.value);
  };

  const handleServerChange = (e) => {
    setServerUrl(e.target.value);
  };

  return (
    <div>
      {/* <div>
        <input
          type="text"
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </div> */}
      <div>
        <button onClick={() => setShowChat((s) => !s)}>
          {showChat ? "Hide Chat Room" : "Show Chat Room"}
        </button>
      </div>
      {showChat && (
        <>
          <hr />
          {/* <div>
            Select Chat Room:{" "}
            <select onChange={handleRoomChange}>
              <option value="general">General</option>
              <option value="travel">Travel</option>
              <option value="music">Music</option>
            </select>
          </div> */}

          <div>
            Select Server:{" "}
            <select onChange={handleServerChange}>
              <option value="https//:localhost:1234">Local Host</option>
              <option value="https//:localhost:3000">Local Host 2</option>
              <option value="https//:localhost:4000">Local Host 3</option>
            </select>
          </div>
          
          <SettingsContext.Provider value={{ defaultServerUrl: "https//:localhost:1234" }}>
            <ChatRoom />
          </SettingsContext.Provider>
        </>
      )}
    </div>
  );
}
