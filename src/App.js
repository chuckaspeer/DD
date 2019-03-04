import React from "react";
import { HashRouter } from "react-router-dom";
import routes from "./router";


const App = () => {
  return (
    <HashRouter>
      <div> 
        
        {routes}
      </div>
    </HashRouter>
  );
};
export default App;
