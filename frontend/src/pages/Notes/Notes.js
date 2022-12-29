import styles from "./Notes.module.css";
import UseWebsiteTitle from "../../hooks/UseWebsiteTitle";
import Note from "./Note/Note";
import { useEffect, useState } from "react";
import axios from "axios";
import { api_url } from "../../App";

export default function Notes() {
  UseWebsiteTitle("Twoje notatki");
  const [notes, setNotes] = useState([]);

  const fetchData = async () => {
    axios
      .get(
        `${api_url}/notes/getnotes/${window.localStorage.getItem("username")}`
      )
      .then((res) => {
        setNotes(res.data.notes);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={`${styles.main_div}`}>
      <h1>Twoje notatki: </h1>
      {notes.length > 0 ? (
        notes.map((note, key) => {
          return (
            <Note
              key={key}
              id={note.id}
              fetch={fetchData}
              title={note.title}
              description={note.description}
              status={note.status}
            />
          );
        })
      ) : (
        <p>Nie masz notatek</p>
      )}
    </div>
  );
}
