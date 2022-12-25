// import "./App.css";
// import Header from "./project/Header";
// import Mainpage from "./project/mainpage";
// import Navbar  from "./project/navbar";
// import Card from "./project/card";
import React from "react";
import { Mainpage } from "./task2/mainpage";
import { Navbar } from "./task2/navbar";
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";
import Card from "./task2/card";
import { Footer } from "./task2/footer";

function App() {
  const data = [
    {
      id: 1,
      icons: <HiOutlineMagnifyingGlassPlus />,
      name: "ANALYSIS",
      description:
        " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. ",
      button: "MORE",
    },
    {
      id: 2,
      icons: <HiOutlineMagnifyingGlassPlus />,
      name: "PLANNING",
      description:
        " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. ",
      button: "MORE",
    },
    {
      id: 3,
      icons: <HiOutlineMagnifyingGlassPlus />,
      name: "DESIGN",
      description:
        " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. ",
      button: "MORE",
    },
    {
      id: 4,
      icons: <HiOutlineMagnifyingGlassPlus />,
      name: "BUILDING",
      description:
        " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. ",
      button: "MORE",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <Mainpage />
      <Card data={data} />
      <Footer />
    </div>
  );
}

export default App;
