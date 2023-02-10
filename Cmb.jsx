import { useState } from "react";

export default function Cmb() {
  const [myChocolate, setMyChocolate] = useState("Oreo Silk");

  const handleChange = (event) => {
    setMyChocolate(event.target.value)
  }

  return (
    <form>
      <select value={myChocolate} onChange={handleChange}>
        <option value="Oreo Silk">Oreo Silk</option>
	<option value="Kitkat" selected>Kitkat</option>
	<option value="5 Star">5 Star</option>
      </select>
    </form>
  )
}
