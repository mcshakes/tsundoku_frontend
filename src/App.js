import ReadingList from "./pages/ReadingList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" />        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
