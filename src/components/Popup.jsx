import React from "react";

export default function Popup (props) {
  return (
    <>
    <div className={props.BlogPopupOpened ? "popContur" : "popNone"}>
      <div className="pop">
        <h3 className="title">{props.activPost.title}</h3>
        <img src={props.activPost.img_2x}/>
        <p className="autor1">{props.activPost.text}</p>   
        <span>#{props.activPost.tags}</span>       
        <span className="autor">{props.activPost.autor}<span className="autor1">• {props.activPost.date} • {props.activPostviews} Views</span> </span>
      </div>
    </div>

    </>
  )
}