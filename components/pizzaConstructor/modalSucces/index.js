import styles from "./styles.module.scss";

import close from "../../../assets/constModal/close.svg";
import { observer } from "mobx-react";

const ModalSuccess = observer(({ modalHandler }) => {


  return (
    <div className={styles.modalCont}>
      <div className={styles.header}>
        <h4></h4>
        <img onClick={(e) => modalHandler(e)} src={close} alt="" />
      </div>
      <div>Замовлення оформленно</div>
        <div>Очікуйте дзвінка</div>
    </div>
  );
});

export default ModalSuccess;
