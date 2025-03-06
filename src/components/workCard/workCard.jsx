import React from "react";
import "./workCard.css";
import LazyLoad from "react-lazy-load";

export default function WorkCard(props) {
  return (
    <LazyLoad height={200} offset={100}>
      <div className={`work-card-main ${props.image}`}>
        <div className="work-card-main-shade"></div>

        <p className="work-card-title">{props.title}</p>
        <p className="work-card-content">{props.content}</p>
      </div>
    </LazyLoad>
  );
}
