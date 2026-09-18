import Avatar from "./components/Avatar";
import Profile from "./components/Profile";
import Info from "./components/Info";

export default function App() {
  const person = "Rohan";
  const size = 100;
  const age = 21;

  // props are immutable
  return (
    <div>
      <Profile>
        <Avatar person={person} />
        <Info age={age} />
      </Profile>
    </div>
  );
}
