import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import WorkPage from "./components/WorkPage";
const App = () => {
  return (
    <div className="w-screen h-screen px-4 pt-4 lg:px-24 lg:pt-10 2xl:px-36 2xl:pt-10">
      <Navigation />
      <Home />
      <WorkPage />
    </div>
  );
};

export default App;
