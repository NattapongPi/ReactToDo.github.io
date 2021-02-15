import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Todo } from "./pages/Todo";

function App() {
  return (
    <BrowserRouter>
      <div className = 'app'>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/todo" component={Todo} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
