import { useContext, useState, useEffect } from "react";

import place from "../../../assets/orderImg/place.svg";
import Select from "../../customSelect/selsect";

import {
  optDay,
  optTime,
  optPay,
  optAdress,
} from "../../../helpers/selectOprions";

import styles from "./styles.module.scss";
import { BasketStoreInstanceCTX } from "../../../stores/basket_store";
import { observer } from "mobx-react";
import Backdrop from "../../backdrop";
import ModalConst from "../../pizzaConstructor/modalConstr";
import ModalSuccess from "../../pizzaConstructor/modalSucces";

const Ordering = observer(() => {
  const { basketPrice, postOrder, changeUserInfo } = useContext(
    BasketStoreInstanceCTX
  );
  const [comment, setComment] = useState(false);
  const [isPrivat, setIsPrivat] = useState(false);
  const [isDelivery, setIsDelivery] = useState(false);

  const deliveryHandler = () => {
    setIsDelivery(!isDelivery);
  };

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const dayChange = (day) => {
    setDate(day);
    changeUserInfo({ name: "day", value:day });
  };

  const timeChange = (time) => {
    setTime(time);
    changeUserInfo({ name: "time", value:time });
  };
  const [successOrder, setSuccessOrder] =useState(false)
  console.log(successOrder)
  const clickOrder = async () => {
    try{
      await  postOrder()
      setSuccessOrder(true)
    }catch (e) {
      setSuccessOrder(false)
    }

  }

  return (
    <div className={styles.contMain}>
      {successOrder ? (
          <Backdrop>
            <ModalSuccess modalHandler={()=>{setSuccessOrder(false)}}/>
          </Backdrop>
      ) : null}
      <h3>Оформлення замовлення</h3>
      <div className={styles.formCont}>
        <div onClick={() => deliveryHandler()} className={styles.btnCont}>
          <button className={isDelivery ? styles.redBtn : null}>
            Доставка кур’єром
          </button>
          <button className={!isDelivery ? styles.redBtn : null}>
            Заберу сам
          </button>
        </div>
        <div className={styles.formInner}>
          <h4>Персональна інформація</h4>
          <div className={styles.persInput}>
            <input
              type="text"
              name="name"
              id="idOffer"
              placeholder="Ім’я"
              onChange={(e) => changeUserInfo(e.target)}
            />
            <input
              type="tel"
              name="phone"
              id="telOffer"
              placeholder="Телефон"
              onChange={(e) => changeUserInfo(e.target)}
            />
          </div>
          <h4>Час доставки</h4>
          <div className={styles.selectInput}>
            <Select onChange={dayChange} value={date} options={optDay()} />
            <Select
              onChange={timeChange}
              value={time}
              options={optTime(date)}
            />
          </div>
          <h4>Адреса {isDelivery ? "доставки" : "ресторану"}</h4>
          <div className={styles.adressMain}>
            <div className={styles.adressPrim}>
              <div className={styles.asressCity}>
                <img src={place} alt="" />
                <p>м. Івано-Франківськ</p>
              </div>
              {isDelivery ? (
                <input
                  type="text"
                  name="street"
                  id="streetOffer"
                  placeholder="Вулиця"
                  onChange={(e) => changeUserInfo(e.target)}
                />
              ) : (
                // <Select options={optAdress} />
                <input
                type="text"
                value={optAdress}
                disabled
                />
              )}
            </div>
            <div
              className={
                isDelivery
                  ? styles.adressSecond
                  : `${(styles.adressSecond, styles.hidden)}`
              }
            >
              <input
                type="text"
                name="house"
                id="houseOffer"
                placeholder="Будинок"
                onChange={(e) => changeUserInfo(e.target)}
              />
              {!isPrivat ? (
                <>
                  <input
                    type="text"
                    name="entrance"
                    id="entranceOffer"
                    placeholder="Під’їзд"
                    onChange={(e) => changeUserInfo(e.target)}
                  />
                  <input
                    type="text"
                    name="apartment"
                    id="flatOffer"
                    placeholder="Квартира"
                    onChange={(e) => changeUserInfo(e.target)}
                  />
                </>
              ) : null}
            </div>
          </div>
          <div
            className={
              isDelivery ? styles.privat : `${(styles.privat, styles.hidden)}`
            }
          >
            <input
              onClick={() => setIsPrivat(!isPrivat)}
              name="privat"
              id="privatOffer"
              type="checkbox"
            />
            <label htmlFor="privat">Приватний будинок</label>
          </div>
          <h4>Оплата</h4>
          <div className={styles.pay}>
            <Select options={optPay} />
            <input
              type="text"
              name="change"
              id="changeOffer"
              placeholder="Без здачі"
            />
          </div>
          <div className={styles.colCommitCont}>
            <div className={styles.comment}>
              <label onClick={() => setComment(!comment)} htmlFor="comment">
                Додати коментар до замовлення
              </label>
              {comment ? (
                <textarea
                  name="comment"
                  id="comment"
                  placeholder="Ваш коментар..."
                  onChange={(e) => changeUserInfo(e.target)}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.total}>
        <p>
          Доставка: <span>Безкоштовно</span>
        </p>
        <p>
          До сплати:<span>{basketPrice()} </span>грн
        </p>
        <button onClick={clickOrder}>Оформити замовлення</button>
      </div>
    </div>
  );
});

export default Ordering;
