import React from "react";
import ImageGrid from "./components/ImageGrid";

const colors = [
  "571845",
  "900C3E",
  "C70039",
  "FFC300",
  "7685AB",
  "E09878",
  "32466F",
];
const randomNumber = (min, max) => parseInt(Math.random() * (max - min) + min);
const randomColor = () => [...colors].sort(() => 0.5 - Math.random()).pop();
const images = Array.from(new Array(randomNumber(10, 30))).map(
  () =>
    `https://via.placeholder.com/400x${randomNumber(
      100,
      400
    )}/${randomColor()}/fff`
);
function App() {
  return (
    <div className="App">
      <ImageGrid>
        <img
          src="https://via.placeholder.com/400x379/7685AB/fff"
          alt="some image"
        />
      </ImageGrid>
    </div>
  );
}

export default App;
