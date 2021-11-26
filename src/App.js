import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Header from "./Components/Header/Header";

import Routes from "./Routes";

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-5">
        <Routes />
      </div>
    </Router>
  );
}

export default App;