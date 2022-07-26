import React, { useState, useEffect } from "react";
import { FcCheckmark } from "react-icons/fc";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoNotificationsOffOutline } from "react-icons/io5";

const Task = ({ task, onDelete, onToggle, onUpdate }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  useEffect(() => {
    setText(task.text);
    setDate(task.date);
  }, []);

  return (
    <div className={`task ${task.reminder ? "reminder" : ""} `}>
      <h3>
        <div className="icon" onClick={() => onDelete(task.id)}>
          <FcCheckmark />
        </div>
        <input
          type="text"
          value={text}
          onBlur={(e) => {
            if (e.target.value !== task.text) {
              setText(e.target.value);
              onUpdate(task.id, text, date);
            }
          }}
          onChange={(e) => setText(e.target.value)}
          className="task-name"
        />
      </h3>
      <div className="flex">
        <div
          className="icon"
          onClick={() => {
            onToggle(task.id);
          }}
        >
          {task.reminder ? (
            <IoNotificationsOffOutline />
          ) : (
            <IoNotificationsOutline />
          )}
        </div>
        <input
          type="text"
          value={date}
          className="task-date"
          onChange={(e) => setDate(e.target.value)}
          onBlur={(e) => {
            if (e.target.value !== task.date) {
              setDate(e.target.value);
              onUpdate(task.id, text, date);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Task;
