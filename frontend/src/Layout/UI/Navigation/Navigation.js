import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MainContext from "../../../context/MainContext";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const context = useContext(MainContext);
  const location = useLocation();

  const showMenuFunction = () => context.dispatch({ type: "show-menu" });

  useEffect(() => {
    showMenuFunction();
  }, [location]);

  return (
    <nav
      className={`${styles.nav} ${
        context.state.showMenu ? `${styles.active}` : `${styles.nav}`
      } `}
    >
      <div className={`${styles.hide_button}`}>
        <button onClick={() => context.dispatch({ type: "show-menu" })}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="black"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </button>
      </div>
      <ul>
        <li>
          <Link to={"/"}>Strona główna</Link>
        </li>
        <li>
          <Link to={"/zaloguj"}>Zaloguj się</Link>
        </li>
        <li>
          <Link to={"/zarejestruj"}>Zarejestruj się</Link>
        </li>
        <li>
          <Link to={"/notatki"}>Twoje notatki</Link>
        </li>
      </ul>
    </nav>
  );
}
