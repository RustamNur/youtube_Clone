import React from "react";
import "./App.css";
import Header from "./components/header/header.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Main from "./components/main/main.jsx"

const App = () => {
  return <div>
    <Header />
    <Sidebar />
    <Navbar />
    <Main />
  </div>;
};

export default App;
