import Header from "./components/header"
import './App.css';
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
//amo react Router 


function App() {
  return (
    <div className="App">
      <Router>
       <Header/>
       <Switch>
         <Route path="/Login">

           <Login />
         </Route>
         <Route path= "/Detail/:id">
          <Detail />
         </Route>
         <Route path= "/">
           <Home />
         </Route>
       </Switch>
      </Router>
     
     

    </div>
  );
}

export default App;
