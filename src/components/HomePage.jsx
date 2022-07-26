import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import { Data } from "../db";

const HomePage = ({ showAddTask }) => {
  const [tasks, setTasks] = useState([]);
  const [func, setFunc] = useState();
  useEffect(() => {
    const tasksInStorage = JSON.parse(localStorage.getItem("tasks"));
    if (!tasksInStorage || tasksInStorage.length === 0) {
      setTasks(Data);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    if (func === "Change") {
      localStorage.removeItem("tasks");
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  useEffect(() => {
    const tasksInStorage = JSON.parse(localStorage.getItem("tasks"));
    if (tasksInStorage) {
      setTasks(tasksInStorage);
    }
  }, []);

  const addTask = (task) => {
    setFunc("Change");
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setFunc("Change");
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setFunc("Change");
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const updateTask = (id, text, date) => {
    setFunc("Change");
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: text, date: date } : task
      )
    );
  };

  return (
    <>
      <AddTask onAdd={addTask} showAddTask={showAddTask} />
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
          onUpdate={updateTask}
        />
      ) : (
        <h3>Нет задач</h3>
      )}
    </>
  );
};

export default HomePage;
