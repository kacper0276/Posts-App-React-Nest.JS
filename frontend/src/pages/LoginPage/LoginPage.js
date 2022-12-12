import { useState } from "react";
import UseWebsiteTitle from "../../hooks/UseWebsiteTitle";
import styles from "./LoginPage.module.css";
import axios from "axios";
import { api_url } from "../../App";

export default function LoginPage() {
  UseWebsiteTitle("Zaloguj się");
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const loginFunction = async (e) => {
    e.preventDefault();

    if (false) {
      axios
        .post(`${api_url}/user/login`, {
          formData,
        })
        .then((res) => {
          console.log(res);
        });
    }
  };

  return (
    <main className={`${styles.main_div}`}>
      <form method="POST">
        <div className={`${styles.login_div}`}>
          <input
            type="text"
            name="login"
            onChange={(e) =>
              setFormData({ ...formData, login: e.target.value })
            }
            autoComplete={"off"}
          />
          <span>Login</span>
        </div>
        <div className={`${styles.password_div}`}>
          <input
            type="password"
            name="password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            autoComplete={"off"}
          />
          <span>Hasło</span>
        </div>
        <button
          className={`${styles.login_button}`}
          onClick={(e) => loginFunction(e)}
        >
          Zaloguj się
        </button>
      </form>
    </main>
  );
}
