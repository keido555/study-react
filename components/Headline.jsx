import styles from "../styles/Home.module.css";

export function Headline(props) {
  const { title, page } = props;
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>

      <p className={styles.description}>
        Get started by editing <code className={styles.code}>pages/{page}</code>
      </p>
    </div>
  );
}
