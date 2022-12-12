import { useContext } from "react";
import MainContext from "../../../context/MainContext";
import styles from "./LoadingIcon.module.css";

export default function LoadingIcon() {
  const context = useContext(MainContext);

  return (
    <div className={`${styles.main_div}`}>
      <div className={`${styles.circle}`}>
        <div
          className={
            context.state.theme.includes("main_dark")
              ? `${styles.dark_circle}`
              : `${styles.light_circle}`
          }
        ></div>
      </div>
    </div>
  );
}
