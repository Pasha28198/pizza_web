import { useState, useEffect, useContext } from "react";
import Link from "next/link";

import HeartSvg from "../../svgImg/heartSvg";
import HeartYel from "../../svgImg/heartYelSvg";

import styles from "./styles.module.scss";

import pizzaImg from "../../../assets/pizzaItemImg/pizza.png";
import pizzaImgDeck from "../../../assets/pizzaItemImg/pizzaDeck.png";
import { BasketStoreInstanceCTX } from "../../../stores/basket_store";
import { ProductsStoreInstanceCTX } from "../../../stores/PostStore";
import Backdrop from "../../backdrop";
import ModalConst from "../../pizzaConstructor/modalConstr";

const PizzaItem = ({ item }) => {
  const [isLike, setIsLike] = useState(false);
  const { productToBasket } = useContext(ProductsStoreInstanceCTX);
  const { addProduct } = useContext(BasketStoreInstanceCTX);

  const likeHandler = (e) => {
    e.stopPropagation();
    setIsLike(!isLike);
  };

  useEffect(() => {
    setChoiseActive(item.choise[0]);
  }, []);

  const [choiseActive, setChoiseActive] = useState({});

  const modalHandler = (e) => {

    setIsOpen(!isOpen);
  };

  const addProductToBasket = () => {
    const product = productToBasket(item._id, choiseActive._id);
    console.log(product)
    addProduct(product);
  };

  const [isOpen, setIsOpen] = useState(false);
  console.log(process.env.NEXT_PUBLIC_URL);
  return (
    <div
        className={styles.itemContainer}
        style={{
          overflow: "hidden"
        }}
    >
      <div className={styles.itemImg}>
        <img  src={`${window?.location?.origin}/images/${item?.img?.substring(1)}`} alt="pizza" />
        <img
            style={{
              objectFit: "cover"
            }}
            src={`${window?.location?.origin}/images/${item?.img?.substring(1)}`}
            alt="pizza"
        />
      </div>
      <div className={styles.itemContent}>
          <div className={styles.itemMainInfo}>
            <div>
              <h4>{item.title} </h4>
              <p>{choiseActive?.mass} гр</p>
            </div>
            <div onClick={(e) => likeHandler(e)} className={styles.svgCont}>
              {isLike ? <HeartYel /> : <HeartSvg />}
            </div>
          </div>
        <div className={styles.itemSubtitle}>
          {item?.ingredients
            ?.map((item) => {
              return item.ingredient.name;
            })
            .toString()
            .split(",")
            .join(", ")}
        </div>
        <div className={styles.typeChoose}>
          {item?.choise?.map((item) => {
            return (
              <button
                className={`${styles.btnType} ${
                  choiseActive?._id === item._id ? styles.activeChoise : ""
                }`}
                onClick={() => {
                  setChoiseActive(item);
                }}
              >
                {item.type}
              </button>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 24px",
          }}
        >
          <h4>{choiseActive?.price} грн</h4>
          <button onClick={addProductToBasket} className={styles.btnSubmit}>
            Замовити
          </button>
        </div>
        <div className={styles.addIng}>
          <div onClick={(e) => modalHandler(e)} >+ Додати інгрідієнти</div>
        </div>
      </div>
      {isOpen ? (
          <Backdrop>
            <ModalConst
                product={item}
                choiseActive={choiseActive}
                modalHandler={modalHandler}
            />
          </Backdrop>
      ) : null}
    </div>
  );
};

export default PizzaItem;
