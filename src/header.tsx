import styles from "./App.module.css";

export const Header = () => {
  return (
    <header class={styles.header}>
      <div class={styles.container}>
        <p class={styles.logo}>
          <span>B</span>Hacker News
        </p>
      </div>
    </header>
  );
};
