import { useState } from "react";

export default function Square({value}) {
  
  //const [value, setValue] = useState(null);

  // const handleClick = () => {
  //   setValue('X');
  // }

  return (
    <button className="square">
      {value}
    </button>
  );
}