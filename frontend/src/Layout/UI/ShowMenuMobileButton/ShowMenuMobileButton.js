import React, { useContext } from "react";
import MainContext from "../../../context/MainContext";
import styles from "./ShowMenuMobileButton.module.css";

export default function ShowMenuMobileButton(props) {
  const context = useContext(MainContext);

  return (
    <div className={`${styles.button_div}`}>
      <button onClick={() => context.dispatch({ type: "show-menu" })}>
        Menu
      </button>
    </div>
  );
}
