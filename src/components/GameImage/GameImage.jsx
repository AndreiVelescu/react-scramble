import styles from "./GameImage.module.css";

export const GameImage = ({ src }) => {
  return <img className={styles.image} src={src} alt="Game state" />;
};
