import { FunctionalComponent, h } from "preact";
import { Route, Router } from "preact-router";

import Home from "../routes/home";
import Profile from "../routes/profile";
import NotFoundPage from "../routes/notfound";
import Welcome from "../routes/welcome";

const App: FunctionalComponent = () => {
  return (
    <div id="preact_root">
      <Router>
        <Route path="/" component={Home} />
        <Route path="/profile/" component={Profile} user="me" />
        <Route path="/profile/:user" component={Profile} />
        <Route path="/welcome/" component={Welcome}/>
        <NotFoundPage default />
      </Router>
    </div>
  );
};

export default App;
