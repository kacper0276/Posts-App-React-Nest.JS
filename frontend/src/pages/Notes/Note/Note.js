import styles from "./Note.module.css";

export default function Note(props) {
  return (
    <div className={`${styles.main_div_note}`}>
      <div className={`${styles.title_notes}`}>
        <strong>{props.title}</strong>
      </div>
      <div className={`${styles.description_notes}`}>
        <p>{props.description}</p>
      </div>
      <div className={`${styles.buttons}`}>
        <button className={`${styles.done_button}`}>Gotowe</button>
        <button className={`${styles.delete_button}`}>Usuń</button>
      </div>
    </div>
  );
}
