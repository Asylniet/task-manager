import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAddTask }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" ? (
        <Button
          color={showAddTask ? "red" : "green"}
          text={showAddTask ? "Закрыть" : "Добавить"}
          onClickFunc={onAdd}
        />
      ) : (
        <Link className="link" to="/">
          Назад
        </Link>
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Список дел",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
