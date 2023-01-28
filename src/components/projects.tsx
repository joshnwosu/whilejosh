import React from "react";

const DATA = [{ title: "react-brick-view" }];

export default function Projects() {
  return (
    <div>
      {DATA.map(({ title }, index) => (
        <div key={index}>{title}</div>
      ))}
    </div>
  );
}
