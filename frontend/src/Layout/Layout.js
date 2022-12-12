import React, { useContext } from "react";
import MainContext from "../context/MainContext";

export default function Layout(props) {
  const context = useContext(MainContext);

  return (
    <div className={`${context.state.theme}`}>
      <>{props.header}</>
      <>{props.main}</>
      <>{props.footer}</>
    </div>
  );
}
