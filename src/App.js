import { useState } from "react";
import "./styles.css";

export default function App() {
  const [emoji, setEmoji] = useState(
    "Meaning of the emoji will be displayed here."
  );
  const [result, setResult] = useState("");
  const [displayEmoji, setdisplayEmoji] = useState("");
  const emojiDictionary = {
    "🍇": "Grape",
    "🍋": "Lemon",
    "🍞": "Bread",
    "🥥": "Coconut",
    "🥝": "Kiwi",
    "🍔": "Burger",
    "🌭": "Hot dog",
    "🍕": "Pizza",
    "🍟": "French Fries",
    "🍨": "Icecream",
    "🧁": "Cupcake",
    "🍭": "Lollipop",
    "🍫": "Chocolate Bar",
    "🍿": "Popcorn",
    "🍩": "Donut",
    "🍪": "Cookie"
  };

  const handleChange = (e) => {
    let value = e.target.value;
    if (value === "") {
      setEmoji("");
      setResult("Meaning of the emoji will be displayed here.");
      return;
    }
    let meaning = emojiDictionary[value];
    if (meaning === undefined) {
      setEmoji("");
      setResult("This emoji does not exist in our database.");
    } else {
      if (value in emojiDictionary) setEmoji(value);
      setResult(meaning);
    }
  };

  function showMeaning(emoji) {
    setdisplayEmoji(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <div className="mainHeading">Food Emoji Interpreter</div>
      <div className="container">
        <div className="input">
          <input
            className="input-box"
            placeholder="Enter an emoji here"
            onChange={handleChange}
          />
          <p className="emoji">{emoji}</p>
          <p className="answer">{result}</p>
        </div>
        <div className="output">
          <h3>Click on any emoji to check it's meaning</h3>
          <ul className="emojilist">
            {Object.keys(emojiDictionary).map((emoji) => (
              <li
                key={emojiDictionary[emoji]}
                className="item"
                onClick={(e) => showMeaning(e.target.innerText)}
              >
                <p>{emoji}</p>
              </li>
            ))}
          </ul>
          <p className="emoji-meaning">{displayEmoji}</p>
        </div>
      </div>
    </div>
  );
}
