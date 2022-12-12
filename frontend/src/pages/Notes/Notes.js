import styles from "./Notes.module.css";
import UseWebsiteTitle from "../../hooks/UseWebsiteTitle";
import Note from "./Note/Note";

export default function Notes() {
  UseWebsiteTitle("Twoje notatki");

  return (
    <div className={`${styles.main_div}`}>
      <h1>Twoje notatki: </h1>
      <Note />
      <Note />
      <Note />
    </div>
  );
}
