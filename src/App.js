import "./App.css";
import GuessGame from "./components/GuessGame";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar></NavigationBar>
        <Route exact path="/">
          <Redirect to="/guessGame" />
        </Route>
        <Route path="/guessGame" component={GuessGameC}></Route>
      </Router>
    </div>
  );
}
const GuessGameC = () => (
  <div>
    <GuessGame></GuessGame>
  </div>
);

export default App;
