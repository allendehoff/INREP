// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Login from "./components/Login/Login"
// import Signup from "./pages/Signup"
import Home from "./pages/Home"
import EMS from "./pages/EMS"
import Hospital from "./pages/Hospital"
import NewPatient from './components/NewPatient/NewPatient';
import CurrentPatient from "./pages/CurrentPatient"

function App() {
  return (
    <div
      style={{
        backgroundColor: "#003249",
        height: "100vh"
      }}
    >
      <Router>
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/ems"}>
            <EMS/>
          </Route>
          <Route path={"/new"}>
            <NewPatient/>
          </Route>
          <Route path={"/:id"}>
            <CurrentPatient/>
          </Route>
          <Route exact path = {"/hospital"}>
            <Hospital/>
          </Route>
          {/* <Route exact path={["/", "/login"]}>
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route> */}
        </Switch>
      </Router>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       This is CASREP for EMS/ hospital comunication in rural areas.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
