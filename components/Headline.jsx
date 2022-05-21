import classes from "./Headline.module.css";

export function Headline(props) {
  const { page, onClick, children } = props;
  return (
    <div>
      <h1 className={classes.title}>{page} page</h1>

      <p className={classes.description}>Get started by editing {children}</p>

      <button onClick={onClick}>ボタン</button>
    </div>
  );
}
