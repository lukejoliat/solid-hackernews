import { ParentProps, type Component } from "solid-js";

import styles from "./App.module.css";
import { Header } from "./header";

const App: Component = (props: ParentProps) => {
  return (
    <div class={styles.App}>
      <Header />
      <div class={styles.container}>{props.children}</div>
    </div>
  );
};

export default App;
