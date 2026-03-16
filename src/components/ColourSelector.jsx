import { useContext } from "react";
import { ColourContext } from "../context/ColourContext";

const ColourSelector = () => {
  const { Colour, setColour } = useContext(ColourContext);

  return (
    <div className="selector-container">
      <label>Pick Note Colour: </label>
      <input 
        type="color" 
        value={Colour} 
        onChange={(e) => setColour(e.target.value)} 
      />
    </div>
  );
};

export { ColourSelector };