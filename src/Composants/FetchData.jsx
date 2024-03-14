import React, { useEffect, useState } from "react";

export default function FetchData() {
  let [user, setUseer] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setUseer(data))
      .catch((erro) => console.log(erro));
  }, []);
  return (
    <div>
      <ul>
        {user.map((lits, index) => (
          <li key={index}>
            {lits.id} | {lits.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
