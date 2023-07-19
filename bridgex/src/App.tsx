import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="p-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        accusamus, libero dolor aspernatur, voluptatibus blanditiis nam
        sapiente, veniam officiis veritatis earum optio placeat voluptate
        mollitia qui in? Laboriosam, fuga sed?
      </p>
      <Button>Click me</Button>
    </>
  );
}

export default App;
