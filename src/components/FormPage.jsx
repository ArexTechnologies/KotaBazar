import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Form,
  FormGroup,
  FormControl,
  Image,
  NavLink,
} from "react-bootstrap";
import NavBar from "./NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect,
} from "react-router-dom";
import Register from "./Register";
import InputField from "./InputField";


function FormPage() {
  

   return (  <div >
      <NavBar />
      <InputField />
    </div>
   )
     
 
}

export default FormPage;
