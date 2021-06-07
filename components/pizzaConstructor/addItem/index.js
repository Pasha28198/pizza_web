import { useState } from "react";

import styles from "./styles.module.scss";

import chicken from "../../../assets/constModal/chicken.png";
import deleteImg from "../../../assets/constModal/deleteRed.svg";
import plusImg from "../../../assets/constModal/plus.svg";
import minusImg from "../../../assets/constModal/minus.svg";
import good from "../../../assets/constModal/good.svg";
import PlusSvg from "../../svgImg/plus";

export default function AddItem({ ingredient, addIngredient }) {
  return (
    <div className={styles.itemCont}>
      <div className={styles.backdrop}></div>
      <div className={styles.complete}>
        <img src={good} alt="" />
      </div>
      <img src={chicken} alt="" />
      <div className={styles.desc}>
        <h6>{ingredient?.name}</h6>
        <p>50гр/{ingredient?.price} грн</p>
      </div>
      <div
        className={styles.plusOnly}
        onClick={() => addIngredient(ingredient)}
      >
        <PlusSvg />
      </div>
    </div>
  );
}
