import React, { useContext } from "react";
import ThemeContext from "../Context/themeContext";
import AppTheme from "../Color";

const Task = ({text="text"}) =>{
     const theme = useContext(ThemeContext)[0];
     const currentTheme = AppTheme[theme];
    return (
      <div
        style={{
          backgroundColor: `${currentTheme.backgroundColor}`,
          color: `${currentTheme.textColor}`,
          height: "20px",
          padding: "5px",
          margin: "10px",
          border: "1.5px solid",
          borderRadius: "4px",
        }}
      >
        <span style={{ marginRight: "20px" }}>{text}</span>
        <button>delete</button>
      </div>
    );
}

export default Task;