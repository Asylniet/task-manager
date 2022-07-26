import React from "react";
const About = () => {
  return (
    <div className="flex column">
      <h3 style={{ marginBottom: "10px" }}>
        Это приложение использует локальное хранилище для хранения списка задач.
      </h3>
      <h3 style={{ marginBottom: "10px" }}>
        Если список дел пуст и страница обновилась, список дел загрузит
        дефолтные задачи для примера.
      </h3>
    </div>
  );
};

export default About;
