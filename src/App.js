import logo from "./logo.svg";
import "./App.css";
import LikeCounter from "./LikeCounter";
import Title from "./Title";

function App() {
  return (
    <div className="App">
      <Title content="Welcome to the like counter!" />
      <LikeCounter />
    </div>
  );
}

export default App;
