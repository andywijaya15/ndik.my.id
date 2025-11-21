import { useState } from "react";
import { Home } from "./components/sections/Home";
import { Analytics } from "@vercel/analytics/next";

export const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <Home />
      <Analytics />
    </>
  );
};

export default App;
