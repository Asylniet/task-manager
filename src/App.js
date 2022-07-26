import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import HomePage from "./components/HomePage";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const onAdd = () => {
    setShowAddTask(!showAddTask);
    !showAddTask
      ? document.getElementById("task-text").focus()
      : document.getElementById("task-text").blur();
  };
  console.log(localStorage.size);
  return (
    <Router>
      <div className="container">
        <Header onAdd={onAdd} showAddTask={showAddTask} />
        <Routes>
          <Route index element={<HomePage showAddTask={showAddTask} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
