import styles from "./ButtonLetters.module.css";
export const ButtonLetters = ({ scrambled, onSelect, used }) => {
  return (
    <div className={styles.div}>
      {scrambled.map((letter, idx) => (
        <button
          className={styles.button}
          key={idx}
          onClick={() => onSelect(letter, idx)}
          disabled={used.includes(idx)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};
