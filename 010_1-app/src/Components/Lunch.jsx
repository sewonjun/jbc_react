import React, { Fragment } from "react";
import styles from "./Lunch.module.css";

export default function Lunch() {
  return (
    <Fragment>
      <h2>Lunch Menu</h2>
      <ul>
        <li id="menu1" className={styles.menu}>
          <img src="img/menu1.jpeg" alt="" width={100} height={100} />
        </li>
        <li></li>
        <li></li>
      </ul>
    </Fragment>
  );
}
