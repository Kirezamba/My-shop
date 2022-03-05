import React from "react";

export default function Categories({ categories }) {
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {categories.map((category) => (
          <li>{category}</li>
        ))}
      </ul>
    </div>
  );
}
