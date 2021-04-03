import React from "react";
import FormPage from "./FormPage";
import Register from "./Register";
import Products from "./Products";
import FooterL from "./FooterL"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      
      <Router>
        <Switch>
          <Route path="/" exact component={FormPage} />
          <Route path="/register" exact component={Register} />
         
          <Route path="/products" exact component={Products} />
        </Switch>
      </Router>

    <FooterL/>
    </div>
  );
}

export default App;
