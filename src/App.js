import { useState } from "react";
import { RadioButton } from "./components/RadioButton";
import "./styles.css";

export default function App() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="App">
      <RadioButton
        options={["cpf", "cnpj"]}
        selected={selected}
        changeSelect={(opt, index) => {
          alert(`o ${opt} está no index ${index}`);
          setSelected(index);
        }}
        horizontal={false}
      />
    </div>
  );
}
