import { useState, useEffect, useContext } from "react";

import Backdrop from "../../backdrop";
import ModalConst from "../modalConstr";

import HeartSvg from "../../svgImg/heartSvg";
import HeartYelSvg from "../../svgImg/heartYelSvg";

import styles from "./styles.module.scss";

import pizzaMob from "../../../assets/pizzaConstImg/pizzaMob.png";
import pizzaBig from "../../../assets/pizzaConstImg/pizzaBig.png";
import fast from "../../../assets/pizzaConstImg/fast.svg";
import { useRouter } from "next/router";
import { ProductsStoreInstanceCTX } from "../../../stores/PostStore";
import { observer } from "mobx-react";
import { BasketStoreInstanceCTX } from "../../../stores/basket_store";

const PizzaMain = observer(() => {
  const { getProductsId, product } = useContext(ProductsStoreInstanceCTX);

  const router = useRouter();

  useEffect(() => {
    if (router?.query?.name) {
      getProductsId(router?.query?.name).then((res) => {
        setChoiseActive(res.data.choise[0]);
      });
    }
  }, [router.query.name]);

  const [isLike, setIsLike] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const modalHandler = (e) => {

    setIsOpen(!isOpen);
  };

  const [choiseActive, setChoiseActive] = useState({ type: "ghhj" });
  console.log(process.env.NEXT_PUBLIC_URL)
  return (
    <div className="container">
      <div className={styles.mainCont}>
        {isOpen ? (
          <Backdrop>
            <ModalConst
              product={product}
              choiseActive={choiseActive}
              modalHandler={modalHandler}
            />
          </Backdrop>
        ) : null}
        <div className={styles.imgCont}>
          <img src={pizzaMob} alt="pizza" />
          <img
            src={`${process.env.NEXT_PUBLIC_URL}${product.img}`}
            alt="pizza"
          />
        </div>
        <div className={styles.infoMainCont}>
          <div className={styles.title}>
            <h2>{product.title}</h2>
            <p>{choiseActive.mass} гр</p>
          </div>
          <div className={styles.subtitle}>
            <p>
              {product?.ingredients
                ?.map((item) => {
                  return item.ingredient.name;
                })
                .toString()
                .split(",")
                .join(", ")}
            </p>
          </div>
          <div className={styles.typeBtn}>
            {product?.choise?.map((item, index) => {
              return (
                <button
                  className={`${styles.btn} ${
                    choiseActive.type === item.type ? styles.activeChoise : ""
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
          <div className={styles.infoPizza}>
            <h4>{choiseActive.price} грн</h4>
            <button>Замовити</button>
            <div onClick={() => setIsLike(!isLike)}>
              {isLike ? <HeartYelSvg /> : <HeartSvg />}
            </div>
          </div>
          <div onClick={(e) => modalHandler(e)} className={styles.ingrid}>
            Змінити інгрідієнти
          </div>
          <div className={styles.deliv}>
            <img src={fast} alt="delivery" />
            <p>Безкоштовна доставка при замовленні від 200 грн</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default PizzaMain;
