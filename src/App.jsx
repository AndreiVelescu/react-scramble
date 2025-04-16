import { ButtonLetters } from "./components/Letters/ButtonLetters";
import { GameImage } from "./components/GameImage/GameImage.jsx";
import { GuessDisplay } from "./components/GuessDisplay/GuessDisplay.jsx";
import words from "./constants/words.js";
import images from "./constants/images.js";
import { useEffect, useState } from "react";
import "./App.css";

const shuffled = (word) => {
  return word.split("").sort(() => Math.random() - 0.5);
};

function App() {
  const [word, setWord] = useState("");
  const [scrambled, setScrambled] = useState([]);
  const [selected, setSelected] = useState([]);
  const [used, setUsed] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const [message, setMessage] = useState("");

  const startGame = () => {
    const randWord = words[Math.floor(Math.random() * words.length)];
    setWord(randWord);
    setScrambled(shuffled(randWord));
    setSelected(Array(randWord.length).fill(""));
    setUsed([]);
    setImageIndex(0);
    setMessage("");
  };

  const handleSelect = (letter, index) => {
    const nextIndex = selected.findIndex((letter) => letter === "");

    if (nextIndex === -1) return;

    const newSelected = [...selected];
    newSelected[nextIndex] = letter;
    setSelected(newSelected);

    setUsed([...used, index]);

    if (!newSelected.includes("")) {
      const guess = newSelected.join("");

      if (guess === word) {
        setMessage("Felicitari! Ai ghicit");
      } else {
        const nextImageIndex = imageIndex + 1;

        if (nextImageIndex >= images.length) {
          setMessage(`Ai pierdut, cuvantul era "${word}".`);
        } else {
          setImageIndex(nextImageIndex);
          setMessage("Gresit! Mai incearca");
          setSelected(Array(word.length).fill(""));
          setUsed([]);
        }
      }
    }
  };

  useEffect(() => {
    startGame();
  }, []);

  return (
    <>
      <div style={{ textAlign: "center", fontFamily: "Arial" }}>
        <h1>Word Scramble</h1>
        <GameImage src={images[imageIndex]} />
        <ButtonLetters
          scrambled={scrambled}
          onSelect={handleSelect}
          used={used}
        />
        <GuessDisplay selected={selected} />
        <p>{message}</p>
        <button onClick={startGame}>Restart</button>
      </div>
    </>
  );
}

export default App;
