import { useState } from "react";

export default function MyButton({ buttonText }) {
  const [myNumber, setMyNumber] = useState(0);
  const [myUsername, setMyUsername] = useState("Frankie");
  const [boolean, setBoolean] = useState(true);
  return (
    <button onClick={() => setMyNumber((myNumber) => myNumber + 1)}>
      {buttonText} scores {myNumber}
    </button>
  );
}

function add(numA, numB) {
  return numA + numB;
}

add(1, 2);
add(10, 20);
