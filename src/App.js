import React from "react";
import Employees from "./Components/Employees";
import Navbar from "./Components/Utils/NavBar";
import Profile from "./Components/Utils/Profile";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <switch>
          <Route exact path="/" component={Employees} />
          <Route exact path="/employee/:id" component={Profile} />
        </switch>
      </Router>
    </div>
  );
}
export default App;
