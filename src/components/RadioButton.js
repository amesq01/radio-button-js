import react from "react";
import "./styles.css";
export const RadioButton = ({ selected, changeSelect, options }) => {
  return (
    <div>
      {options.map((opt, index) => {
        return (
          <button onClick={() => changeSelect(opt, index)} className="button">
            <div className="outlineCircle">
              {selected === index && <div className="fillCircle" />}
            </div>
            <span>{opt}</span>
          </button>
        );
      })}
    </div>
  );
};
