import styles from "./AddNote.module.css";
import useWebsiteTitle from "../../hooks/UseWebsiteTitle";
import { useState } from "react";
import { api_url } from "../../App";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AddNote() {
  useWebsiteTitle("Dodaj notatkę");
  const [noteData, setNoteData] = useState({
    username: window.localStorage.getItem("username"),
    title: "",
    description: "",
    status: false,
  });
  const [status, setStatus] = useState(undefined);

  const addNote = async (e) => {
    e.preventDefault();

    axios.post(`${api_url}/notes/addnotes`, noteData).then((res) => {
      if (res.data.message) {
        setStatus(res.data.message);
      }
    });
  };

  return (
    <div className={`${styles.main_div}`}>
      <div className={`${styles.arrow}`}>
        <Link to={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="white"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </Link>
      </div>
      <h1>Dodaj notakę</h1>
      <form>
        <input
          type="text"
          placeholder="Tytuł"
          required
          onChange={(e) => setNoteData({ ...noteData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Opis"
          required
          onChange={(e) =>
            setNoteData({ ...noteData, description: e.target.value })
          }
        />
        <button className={`${styles.add_button}`} onClick={addNote}>
          Dodaj notatkę
        </button>
        {typeof status !== "undefined" ? (
          <div className={`${styles.success_add_note}`}>{status}</div>
        ) : null}
      </form>
    </div>
  );
}
