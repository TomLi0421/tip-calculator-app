import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className="py-12">
      <h1
        className={`${styles.header__title_color} uppercase text-center tracking-[.5em]`}
      >
        Spli
        <br />
        tter
      </h1>
    </div>
  );
}

export default Header;
