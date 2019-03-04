import React from "react";
// import Home from "./components/Home/Home";
import ClassMain from './components/ClassRm/ClassMain'
import { Switch, Route } from "react-router-dom";
import HeaderDrawer from './components/LayOut/HeaderDrawer'
import ReportsMain from './components/Reports/ReportsMain'
import Student from './components/Student/Student'

export default (
   <HeaderDrawer >
  <Switch>
    {/* <Route exact component={Login} path="/" /> */}
   
    {/* <Route exact component={Home} path="/home" /> */}
  <Route exact component={ClassMain} path='/classmain/0'/>
  <Route component ={Student} path ='/student/'/>
  <Route exact component={ReportsMain} path="/reportsmain"/>

  </Switch>
  </HeaderDrawer>
);
