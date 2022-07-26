import React, { useState } from "react";
const AddTask = ({ onAdd, showAddTask }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    onAdd({ text, date, reminder });

    setText("");
    setDate("");
    setReminder(false);
  };

  return (
    <form className={`add-form ${showAddTask && "open"}`} onSubmit={onSubmit}>
      <div className="form-control">
        <label>Задача</label>
        <input
          type="text"
          placeholder="Добавить задачу"
          value={text}
          onChange={(e) => setText(e.target.value)}
          id="task-text"
          autoComplete="off"
        />
      </div>
      <div className="form-control">
        <label>Дата</label>
        <input
          type="text"
          placeholder="Добавить дату"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Поставить напоминание</label>
        <input
          type="checkbox"
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Добавить" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
