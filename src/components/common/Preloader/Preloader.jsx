import React from "react";
import preloader from "../../../assets/images/preloader.gif";
import styles from "./styles.module.css";

function Preloader(props) {
  return (
    <div className={styles.preloader}>
      <img src={preloader} alt="" />
    </div>
  );
}

export default Preloader;
