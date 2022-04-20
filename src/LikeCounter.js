import { useState } from "react";

export default function LikeCounter() {
  const initial_Likes = 0;
  const [numLikes, setNumLikes] = useState(initial_Likes);
  //console.log("What are these?", numLikes, setNumLikes);
  const [activeOrInactive, setActiveOrInactive] = useState(true);

  const incrementLikes = () => {
    console.log("Yes, clicked! Current number of likes", numLikes);
    setNumLikes(numLikes + 1);
  };

  const resetLikes = () => {
    setNumLikes(initial_Likes);
  };

  const clickUnclick = () => {
    setActiveOrInactive(!activeOrInactive);
  };

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> Likes!{" "}
        <button onClick={incrementLikes}>Like</button>{" "}
        <button onClick={resetLikes}>Reset likes</button>{" "}
        <button onClick={clickUnclick}>
          {activeOrInactive ? " CLICK ME!" : "UNCLICK ME!"}
        </button>
      </p>
    </div>
  );
}
