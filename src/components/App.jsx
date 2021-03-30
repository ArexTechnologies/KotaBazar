import React from "react";
import FormPage from "./FormPage";
import Register from "./Register";
import Products from "./Products";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function App() {




  return (

    
    <div>

      <FormPage />
      <Router>
      <Switch>
      <Route path="/register" exact component={Register}  />
        <Route path="/nav" component={Nav} />
        <Route path="/products" component={Products} />

      </Switch>
        
      </Router>

      {/* <Link to="/register"> click</Link> */}
    </div>
  );
}

export default App;
