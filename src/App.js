import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddEvent from "./components/AddEvent/AddEvent";
import AllEvents from "./components/AllEvents/AllEvents";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MyEvents from "./components/MyEvents/MyEvents";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/registration/:id">
            <Registration />
          </PrivateRoute>
          <PrivateRoute path="/myEvents">
            <MyEvents />
          </PrivateRoute>
          <PrivateRoute path="/allEvents">
            <AllEvents />
          </PrivateRoute>
          <PrivateRoute path="/addEvent">
            <AddEvent />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
