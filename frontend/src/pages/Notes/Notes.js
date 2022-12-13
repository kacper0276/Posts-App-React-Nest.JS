import styles from "./Notes.module.css";
import UseWebsiteTitle from "../../hooks/UseWebsiteTitle";
import Note from "./Note/Note";

export default function Notes() {
  UseWebsiteTitle("Twoje notatki");

  return (
    <div className={`${styles.main_div}`}>
      <h1>Twoje notatki: </h1>
      <Note title={"Testowy tytuł"} description={"Testowy opis"} />
      <Note title={"Testowy tytuł #2"} description={"Testowy opis #2"} />
      <Note
        title={"Testowy tytuł #3"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      />
    </div>
  );
}
