import React from "react";
import projects from "../Data";

export default function Card() {
  return (
    <div>
      {projects.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
