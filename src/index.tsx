/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { Route, Router } from "@solidjs/router";
import { Posts } from "./posts";
import { Post } from "./post";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <Router root={App}>
      <Route path={"/"} component={Posts} />
      <Route path={"/post/:id"} component={Post} />
    </Router>
  ),
  root!
);
// render(() => <App />, root!);
