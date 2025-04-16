import styles from "./GuessDisplay.module.css";

export const GuessDisplay = ({ selected }) => {
  return (
    <div className={styles.div}>
      {selected.map((l, i) => (
        <span className={styles.span} key={i}>
          {l || "_"}
        </span>
      ))}
    </div>
  );
};
