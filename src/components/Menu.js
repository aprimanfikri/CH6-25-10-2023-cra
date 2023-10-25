import { useState } from "react";
import "./Menu.css";

function Menu(props) {
  const [kelas, setKelas] = useState(true);
  console.log(props);
  console.log(props.props1);
  console.log(props.props2);
  const clickHandler = () => {
    setKelas(!kelas);
  };
  return (
    <div className="Menu">
      <h1>{kelas ? "FSW 2 LUAR BIASA" : "FSW 2 SANGAT LUAR BIASA BANGET"}</h1>
      <button onClick={clickHandler}>GANTI HEADING</button>
      <ul>
        <li>ini menu 1</li>
        <li>ini menu 2</li>
        <li>ini menu 3</li>
        <li>{props.props1}</li>
        <li>{props.props2}</li>
      </ul>
    </div>
  );
}

export default Menu;
