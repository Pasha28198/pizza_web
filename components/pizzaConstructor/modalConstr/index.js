import styles from "./styles.module.scss";

import close from "../../../assets/constModal/close.svg";
import FoodItem from "../foodItem";
import { useContext, useEffect } from "react";
import { BasketStoreInstanceCTX } from "../../../stores/basket_store";
import { observer } from "mobx-react";
import AddItem from "../addItem";
import NewItem from "../newItem";
import { ProductsStoreInstanceCTX } from "../../../stores/PostStore";

const ModalConst = observer(({ modalHandler, product, choiseActive }) => {
  console.log(choiseActive);
  const {
    getIngredients,
    ingredients,
    newIngredientsArray,
    addIngredients,
    increaseIngredient,
    decreaseIngredient,
    deleteIngredient,
    getPrice,
    priceOrder,
    addProduct,
  } = useContext(BasketStoreInstanceCTX);
  const { productToBasket } = useContext(ProductsStoreInstanceCTX);
  console.log(priceOrder);
  useEffect(() => {
    getIngredients();
    getPrice(choiseActive._id);
  }, []);

  useEffect(() => {
    getPrice(choiseActive._id);
  }, [newIngredientsArray]);

  const addProductToBasket = () => {
    function uuidv4() {
      return "xxxxxxxxxxxxхxxxyxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    }
    const products = productToBasket(
      product._id,
      choiseActive._id,
      newIngredientsArray
    );

    products.choise.price = priceOrder;
    products._id = uuidv4();

    addProduct(products);
  };

  return (
    <div className={styles.modalCont}>
      <div className={styles.header}>
        <h4>Піца {product?.title}</h4>
        <img onClick={(e) => modalHandler(e)} src={close} alt="" />
      </div>
      <div className={styles.content}>
        <div>
          <h6>Інгрідієнти</h6>
          <div className={styles.itemsCont}>
            {product.ingredients.map((item) => {
              return (
                <FoodItem
                  addIngredients={addIngredients}
                  count={item.count}
                  ingredient={item.ingredient}
                />
              );
            })}
          </div>
        </div>
        <div>
          <h6>Додані інгрідієнти</h6>
          <div className={styles.itemsCont}>
            {newIngredientsArray.map((item) => {
              return (
                <NewItem
                  increaseIngredient={increaseIngredient}
                  decreaseIngredient={decreaseIngredient}
                  addIngredients={addIngredients}
                  deleteIngredient={deleteIngredient}
                  ingredient={item}
                />
              );
            })}
          </div>
        </div>
        <div>
          <h6>Додати інші інгрідієнти</h6>
          <div className={styles.itemsContAdd}>
            {ingredients.map((item) => {
              return (
                <AddItem addIngredient={addIngredients} ingredient={item} />
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.modalFooter}>
        <h5>{priceOrder} грн</h5>
        <button onClick={addProductToBasket}>Додати в кошик</button>
      </div>
    </div>
  );
});

export default ModalConst;
