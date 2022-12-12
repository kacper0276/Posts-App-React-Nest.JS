import { useState } from "react";
import UseWebsiteTitle from "../../hooks/UseWebsiteTitle";
import styles from "./RegisterPage.module.css";
import axios from "axios";
import { api_url } from "../../App";

export default function RegisterPage() {
  UseWebsiteTitle("Strona rejestracji");
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    repeat_password: "",
  });

  const registerFunction = async (e) => {
    e.preventDefault();

    if (false) {
      axios
        .post(`${api_url}/user/register`, {
          formData,
        })
        .then((res) => {
          console.log(res);
        });
    }
  };

  return (
    <div className={`${styles.main_div}`}>
      <form>
        <div className={`${styles.login_div}`}>
          <input
            type={"text"}
            name="login"
            onChange={(e) =>
              setFormData({ ...formData, login: e.target.value })
            }
          />
          <span>Login</span>
        </div>
        <div className={`${styles.password_one_div}`}>
          <input
            type={"password"}
            name="password_1"
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
          <span>Hasło</span>
        </div>
        <div className={`${styles.password_two_div}`}>
          <input
            type={"password"}
            name="password_2"
            onChange={(e) => {
              setFormData({ ...formData, repeat_password: e.target.value });
            }}
          />
          <span>Powtórz hasło</span>
        </div>
        <button
          className={`${styles.register_button}`}
          onClick={(e) => registerFunction(e)}
        >
          Zarejestruj się
        </button>
      </form>
    </div>
  );
}
