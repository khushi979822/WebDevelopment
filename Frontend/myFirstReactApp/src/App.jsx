import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <br />
      <div id="abcd">My First react app</div>
      <br />
      <p className="bg-success">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
        pariatur adipisci, hic maxime sit doloribus ipsa. Reprehenderit
        provident nemo, doloribus, nostrum corrupti quam, eveniet unde officiis
        est error debitis nam quo? Veniam, a. At officia quasi exercitationem
        enim eum aliquam maiores autem expedita aspernatur quisquam!
      </p>
      <button id="clickButton">Click Here</button>
      <br />
      <br />
      <Footer />
    </>
  );
}

export default App;
