import React from "react";
import styles from "./MainPage.module.css";
import UseWebsiteTitle from "../../hooks/UseWebsiteTitle";

export default function MainPage() {
  UseWebsiteTitle("Strona główna");

  return (
    <main className={`${styles.main_div}`}>
      <h1>Strona główna</h1>
    </main>
  );
}
