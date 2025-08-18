import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyButton from "./MyButton";
import Gallery from "./Gallery";

function App() {
  const [count, setCount] = useState(0);

  const appImages = [
    {
      title: "Flat Stanley",
      imgSource:
        "https://d1lp72kdku3ux1.cloudfront.net/title_instance/839/medium/3546231.jpg",
      imgAlt: "a fantastic childrens book",
    },
    {
      title: "Dilla Time - The Life And After Life",
      imgSource:
        "https://soundsoftheuniverse.com/img/cGdsVDdrWVo2U096bDRFaXAvNW1ndz09/71je-ual9bl.jpg",
      imgAlt: "an image of the book Dilla Time",
    },
    {
      title: "Atomic Habits",
      imgSource:
        "https://parentotheca.com/wp-content/uploads/2021/04/IMG_0356-scaled.jpg",
      imgAlt: "the front cover of the book Atomic Habits",
    },
    {
      title: "The Diary of a CEO",
      imgSource:
        "https://www.penguin.co.uk/_next/image?url=https%3A%2F%2Fcdn.penguin.co.uk%2Fdam-assets%2Fbooks%2F9781529146509%2F9781529146509-jacket-large.jpg&w=819&q=100",
      imgAlt: "an image of the book, THe Diary of a CEO",
    },
    {
      title: "Blood on the Streets: A-Z of Glasgow Crime",
      imgSource: "https://m.media-amazon.com/images/I/61iWaYOnzPL._SL1000_.jpg",
      imgAlt: "A book by Robert Jeffrey about street crime in Glasgow",
    },
    {
      title: "One Day",
      imgSource:
        "https://upload.wikimedia.org/wikipedia/en/6/6f/One_day_-_david_nicholls.jpg",
      imgAlt: "this is the image of the book One Day by David Nicholls",
    },
    {
      title: "Confident Presenter",
      imgSource: "https://m.media-amazon.com/images/I/612S0ew9bSL._SY466_.jpg",
      imgAlt:
        "this is the image of the book Confident Presenter by Andrea Pacini",
    },
  ];

  const secondArray = [
    {
      title: "My other book",
      imgSource:
        "https://d1lp72kdku3ux1.cloudfront.net/title_instance/839/medium/3546231.jpg",
      imgAlt: "a fantastic childrens book",
    },
    {
      title: "another great book",
      imgSource:
        "https://soundsoftheuniverse.com/img/cGdsVDdrWVo2U096bDRFaXAvNW1ndz09/71je-ual9bl.jpg",
      imgAlt: "an image of the book Dilla Time",
    },
  ];

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello there, DI003</h1>
      <h2>Welcome to your first React project</h2>

      <MyButton buttonText={"Vinay"} />
      <MyButton buttonText={"Marina"} />
      <MyButton buttonText={"Demir"} />
      <MyButton buttonText={"Teaks"} />
      <MyButton buttonText={"Hadia"} />
      <MyButton buttonText={"Patrick"} />

      <div className="card">
        <button onClick={() => setCount((count) => count + 10)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Gallery images={appImages} />
      <Gallery images={secondArray} />
    </>
  );
}

export default App;
