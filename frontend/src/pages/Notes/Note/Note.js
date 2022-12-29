import axios from "axios";
import { api_url } from "../../../App";
import styles from "./Note.module.css";

export default function Note(props) {
  const setDone = (id) => {
    axios.get(`${api_url}/notes/setdonenote/${id}`).then((res) => {
      if (res.data.message === "Zmieniono status zadania") {
        props.fetch();
      }
    });
  };

  const deleteNote = (id) => {
    axios.get(`${api_url}/notes/deletenotes/${id}`).then((res) => {
      if (res.data.message === "Usunięto") {
        props.fetch();
      }
    });
  };

  return (
    <div className={`${styles.main_div_note}`}>
      <div className={`${styles.title_notes}`}>
        <strong>{props.title}</strong>
      </div>
      <div className={`${styles.description_notes}`}>
        <p>{props.description}</p>
      </div>
      <div className={`${styles.buttons}`}>
        <button
          className={`${styles.done_button}`}
          disabled={props.status ? true : false}
          onClick={() => setDone(props.id)}
        >
          Gotowe
        </button>
        <button
          className={`${styles.delete_button}`}
          onClick={() => deleteNote(props.id)}
        >
          Usuń
        </button>
      </div>
    </div>
  );
}
