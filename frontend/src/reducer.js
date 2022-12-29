import styles from "./Layout/Layout.module.css";

export const reducer = (state, action) => {
  switch (action.type) {
    case "change-theme":
      const newTheme =
        state.theme === `${styles.main_dark}`
          ? `${styles.main_light}`
          : `${styles.main_dark}`;
      return { ...state, theme: newTheme };

    case "change-login-status":
      const loginStatus = state.login_status === true ? false : true;
      return { ...state, login_status: loginStatus };

    case "show-menu":
      const menuIsShow = state.showMenu === false ? true : false;
      return { ...state, showMenu: menuIsShow };

    default:
      throw new Error(`Nie ma takiej akcji: ${action.type}`);
  }
};

export const initialState = {
  theme: `${styles.main_dark}`,
  login_status: Boolean(window.localStorage.getItem("username")),
  showMenu: false,
};
