import { useState } from "react";
import { Home } from "./components/sections/Home";

export const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <Home />
    </>
  );
};

export default App;
