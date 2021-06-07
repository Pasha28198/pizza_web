import { useState } from "react";

import styles from "./styles.module.scss";

import chicken from "../../../assets/constModal/chicken.png";
import deleteImg from "../../../assets/constModal/deleteRed.svg";
import plusImg from "../../../assets/constModal/plus.svg";
import minusImg from "../../../assets/constModal/minus.svg";
import good from "../../../assets/constModal/good.svg";
import PlusSvg from "../../svgImg/plus";

export default function NewItem({
  ingredient,
  increaseIngredient,
  decreaseIngredient,
  deleteIngredient,
}) {
  console.log(ingredient);

  return (
    <div className={styles.itemCont}>
      <div className={styles.backdrop}></div>
      <div className={styles.complete}>
        <img src={good} alt="" />
      </div>
      <img src={chicken} alt="" />
      <div className={styles.desc}>
        <h6>{ingredient?.ingredient.name}</h6>
        <p>50гр/{ingredient?.ingredient.price} грн</p>
      </div>

      <div
        onClick={() => deleteIngredient(ingredient.ingredient._id)}
        className={styles.delete}
      >
        <img src={deleteImg} alt="" />
      </div>

      <div className={styles.changeCount}>
        <div className={styles.changeInner}>
          <div onClick={() => decreaseIngredient(ingredient.ingredient._id)}>
            <img src={minusImg} alt="" />
          </div>
          <p>{ingredient.count}</p>
          <div onClick={() => increaseIngredient(ingredient.ingredient._id)}>
            <PlusSvg />
          </div>
        </div>
      </div>
    </div>
  );
}
