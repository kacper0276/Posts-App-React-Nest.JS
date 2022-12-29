import { useContext, useState } from "react";
import UseWebsiteTitle from "../../hooks/UseWebsiteTitle";
import styles from "./LoginPage.module.css";
import axios from "axios";
import { api_url } from "../../App";
import { useNavigate } from "react-router-dom";
import MainContext from "../../context/MainContext";

export default function LoginPage() {
  UseWebsiteTitle("Zaloguj się");
  const navigate = useNavigate();
  const context = useContext(MainContext);
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });
  const [status, setStatus] = useState(undefined);

  const loginFunction = async (e) => {
    e.preventDefault();

    axios.post(`${api_url}/users/login`, formData).then((res) => {
      if (res.data.message) {
        setStatus(res.data.message);
      } else if (res.data.loginStatus) {
        context.dispatch({ type: "change-login-status" });
        window.localStorage.setItem("username", res.data.loginStatus);
        navigate("/");
      }
    });
  };

  return (
    <main className={`${styles.main_div}`}>
      <div className={`${styles.form_div}`}>
        <form method="POST">
          <div className={`${styles.login_div}`}>
            <input
              type="text"
              name="login"
              placeholder=" "
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
              placeholder=" "
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
        {typeof status !== "undefined" ? (
          <div className={`${styles.error_message}`}>{status} </div>
        ) : null}
      </div>
    </main>
  );
}
