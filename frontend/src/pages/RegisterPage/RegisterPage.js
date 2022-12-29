import { useState } from "react";
import UseWebsiteTitle from "../../hooks/UseWebsiteTitle";
import styles from "./RegisterPage.module.css";
import axios from "axios";
import { api_url } from "../../App";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  UseWebsiteTitle("Strona rejestracji");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    repeat_password: "",
  });
  const [status, setStatus] = useState(undefined);

  const registerFunction = async (e) => {
    e.preventDefault();

    axios.post(`${api_url}/users/register`, formData).then((res) => {
      if (
        res.data.message ===
        "Hasła nie są takie same / taki użytkownik już istnieje"
      ) {
        setStatus(res.data.message);
      } else {
        navigate("/zaloguj");
      }
    });
  };

  return (
    <main className={`${styles.main_div}`}>
      <div className={`${styles.form_div}`}>
        <form>
          <div className={`${styles.login_div}`}>
            <input
              type={"text"}
              name="login"
              placeholder=" "
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
              placeholder=" "
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
              placeholder=" "
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
        {typeof status !== "undefined" ? (
          <div className={`${styles.error_message}`}>{status} </div>
        ) : null}
      </div>
    </main>
  );
}
