import React from "react";
import "./styles.css";
export default function Card(props) {
  return (
    <div className="Card">
      <div>
        <img src={props.img} className="card--img" alt={props.title} />
      </div>
      <div>
        <div className="card--title">{props.title}</div>
        <a href={props.link} target="_blank">
          <button className="card--button">WATCH NOW !!</button>
        </a>
      </div>
    </div>
  );
}
