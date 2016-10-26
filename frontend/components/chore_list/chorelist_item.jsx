import React from 'react';
export default ({title, body, done}) => (
  <li className={done ? "completed" : "pending"}>
    {title}
  </li>
);
