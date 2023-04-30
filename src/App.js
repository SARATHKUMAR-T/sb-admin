import "./App.css";
import Animations from "./Components/Animations";
import Others from "./Components/Others";
import Borders from "./Components/Borders";
import Buttons from "./Components/Buttons";
import Cards from "./Components/Cards";
import Colors from "./Components/Colors";
import Dashboard from "./Components/Dashboard";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        {/* Cards */}
        <Route path="/card">
          <Cards />
        </Route>
        {/* Colors */}
        <Route path="/color">
          <Colors />
        </Route>
        {/* Buttons */}
        <Route path="/buttons">
          <Buttons />
        </Route>
        {/* Borders */}
        <Route path="/borders">
          <Borders />
        </Route>
        {/* Others */}
        <Route path="/others">
       <Others/>
        </Route>
        {/* Animations */}
        <Route path="/animations">
        <Animations/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
