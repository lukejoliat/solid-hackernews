import { A } from "@solidjs/router";
import styles from "./App.module.css";

export const Header = () => {
  return (
    <header class={styles.header}>
      <div class={styles.container}>
        <A class={styles.logo} href="/">
          <span>B</span>Hacker News
        </A>
      </div>
    </header>
  );
};
