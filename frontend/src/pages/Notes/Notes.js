import styles from "./Notes.module.css";
import UseWebsiteTitle from "../../hooks/UseWebsiteTitle";

export default function Notes() {
  UseWebsiteTitle("Twoje notatki");

  return (
    <div className={`${styles.main_div}`}>
      <h1>Twoje notatki: </h1>
    </div>
  );
}
