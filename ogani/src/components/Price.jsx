import { useState } from "react";

export function Price(props) {
  const [range, setRange] = useState(0);
  function handleChange(event) {
    setRange(event.target.value);
  }
  return (
    <>
      <h2 className="aside__price-title">Price</h2>
      <input type="range" value={range} onChange={handleChange} />
      <span>$0 - ${range}</span>
    </>
  );
}
