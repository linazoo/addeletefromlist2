//will have an input and a button

// when the button is clicked the value of the input will be added to a list of items

// once the item is added if you click it it will be removed from the list of items

import { useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState(["a", "b", "c"]);

  const handleClick = () => {
    setList([...list, value]);
    setValue("");
  };

  const handleRemove = (item) => {
    const newArray = list.filter((i) => i !== item);
    setList(newArray);
  };
  console.log(list);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input value={value} onChange={(e) => setValue(e.target.value)}></input>
      <button onClick={handleClick}>add to the list</button>
      {list.map((item) => (
        <p onClick={() => handleRemove(item)}>{item}</p>
      ))}
    </div>
  );
}
