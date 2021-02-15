import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Todo } from "./pages/Todo";
import { ListContext, ListProvider } from "./context";

function App() {
  const [count, setCount] = useState(0);
  return (
    <ListProvider>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/todo" component={Todo} />
          </Switch>
        </div>
      </BrowserRouter>
    </ListProvider>
  );
}

export default App;
