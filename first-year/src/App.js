import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Month04 from "./pages/month-04"
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Month04} />
      </div>
    </Router>
  );
}

export default App;