import React from "react";
import Home from "./components/Home/Home";
import ClassMain from './components/ClassRm/ClassMain'
import { Switch, Route } from "react-router-dom";
import HeaderDrawer from './components/LayOut/HeaderDrawer'
import ReportsMain from './components/Reports/ReportsMain'
import StudentMain from './components/Forms/StudentForm/StudentMain'
import FormMain from './components/Forms/ARDForm/ARDMain'
import ClassView from './components/ClassRm/ClassView'


export default (
   <HeaderDrawer >
  <Switch> 
   
    {/* <Route exact component={Login} path="/" /> */}
   
   <Route exact component={Home} path="/home" />
  <Route exact component={ClassMain} path='/classmain/0'/>
  
  <Route exact component={ReportsMain} path="/reportsmain"/>
  <Route exact component={FormMain} path={`/formmain/0`}/>
  <Route exact component={StudentMain} path="/formmain/1"/>
  <Route exact component={ClassView} path='/classview/'/>
  
  </Switch>
  </HeaderDrawer>
);
