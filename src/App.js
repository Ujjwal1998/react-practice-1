import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [likeCount, setLikeCount] = useState(0);
  const [username, setUsername] = useState("");
  const [emojiMeaning, setEmojiMeaning] = useState("");
  let emojiDictionary = {
    "😀": "grinning face",
    "😁": "beaming face with smiling eyes",
    "🤣": "rolling on the floor laughing",
    "🙃": "upside-down face",
    "😉": "winking face"
  };
  function likeButtonHandler() {
    let likeCounter = likeCount;
    likeCounter = likeCounter + 1;
    setLikeCount(likeCounter);
    console.log("hi");
  }
  function usernameInputHandler(event) {
    let username = event.target.value;
    // console.log(username);
    setUsername(username);
    // console.log(fusername);
    returnOutput();
  }
  function returnOutput() {
    // console.log("in fn", fusername);
    if (username === "") {
      return <div> your post has {likeCount} likes </div>;
    } else {
      return (
        <div>
          <strong>{username}'s </strong> post has {likeCount} likes like your
          post
        </div>
      );
    }
  }
  function getEmojiBg(index) {
    if (index % 2 === 0) {
      return "lightgreen";
    }
    return "yellow";
  }
  function handleEmojiClick(emoji) {
    setEmojiMeaning(emojiDictionary[emoji]);
  }
  function returnEmojiDictionary() {
    // console.log("in fn", fusername);
    console.log(Object.keys(emojiDictionary));
    return (
      <ul>
        {Object.keys(emojiDictionary).map((emoji, index) => {
          return (
            <li
              onClick={() => handleEmojiClick(emoji)}
              key={emoji}
              style={{
                marginTop: "1rem",
                background: getEmojiBg(index),
                cursor: "pointer",
                display: "inline",
                listStyle: "none",
                fontSize: "4rem",
                padding: "2rem"
              }}
            >
              {emoji}
            </li>
          );
        })}
      </ul>
    );

    // return Object.keys(emojiDictionary).map((emoji) => {
    //   console.log(emoji);
    // });
  }
  console.log(typeof emojiMeaning);
  let expression;
  if (emojiMeaning === "") {
    expression = <h1>Tell us how you feel !?</h1>;
  } else {
    expression = <h1> {emojiMeaning} </h1>;
  }

  return (
    <div className="App">
      <input
        id="one"
        placeholder="Enter your name"
        onChange={usernameInputHandler}
      ></input>
      <h1>Hello {username}</h1>

      <button onClick={likeButtonHandler}> Like! </button>
      <div>{returnOutput()}</div>
      {expression}
      <div>{returnEmojiDictionary()}</div>
    </div>
  );
}
