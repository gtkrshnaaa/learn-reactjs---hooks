import { useState } from "react";

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }


  return (
    <div>
      <h1>Penghitung yang di perbarui bersamaan</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />

    </div>
  )
}


function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      diklik {count} kali
    </button>
  )
}