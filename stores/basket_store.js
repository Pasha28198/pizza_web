import { createContext } from "react";
import { makeAutoObservable, toJS } from "mobx";
import { instance } from "./PostStore";

function postOrder(data) {
  return instance.post("order", data);
}

function getIngredients() {
  return instance.get("products/ingredients");
}

function getPrice(data) {
  return instance.post("order/price", data);
}

class BasketStore {
  basket = {};
  ingredients = [];
  priceOrder = "";

  newIngredients = {};

  name = "";
  phone = "";
  day = "";
  time = "";
  city = "м. Івано-Франківськ";
  street = "";
  house = "";
  apartment = "";
  floor = "";
  entrance = "";
  comment = "";

  changeUserInfo = ({ name, value }) => {
    this[name] = value;
  };

  constructor(initialData = {}) {
    makeAutoObservable(this);
    const basket = process.browser && localStorage.getItem("basket");
    if (basket) {
      this.basket = JSON.parse(basket);
    }
  }

  get newIngredientsArray() {
    return Object.values(this.newIngredients);
  }

  increaseIngredient = (ingredientId) => {
    console.log(ingredientId);
    this.newIngredients[ingredientId] = {
      ...this.newIngredients[ingredientId],
      count: ++this.newIngredients[ingredientId].count,
    };
    this.saveToStorage();
  };

  decreaseIngredient = (ingredientId) => {
    let { count } = this.newIngredients[ingredientId];
    if (!--count) {
      this.deleteProduct(ingredientId);
    } else {
      this.newIngredients[ingredientId] = {
        ...this.newIngredients[ingredientId],
        count: --this.newIngredients[ingredientId].count,
      };
    }
    this.saveToStorage();
  };

  deleteIngredient = (ingredientId) => {
    delete this.newIngredients[ingredientId];
  };

  getIngredients = async () => {
    const response = await getIngredients();

    this.ingredients = response.data;
  };

  getPrice = async (choiseId) => {
    const ingredients = this.newIngredientsArray.map(
      ({ count, ingredient }) => {
        return { count, _id: ingredient._id };
      }
    );
    const data = {
      products: [
        {
          quantity: 1,
          choise: choiseId,
          ingredients,
        },
      ],
    };
    const response = await getPrice(data);

    this.priceOrder = response?.data?.price;
  };

  addIngredients = (ingredient) => {
    console.log(ingredient);
    const ingredientExistInCart = this.newIngredients[ingredient._id];

    if (ingredientExistInCart) {
      this.increaseIngredient(ingredient._id);
    } else {
      this.newIngredients[ingredient._id] = {
        ingredient,
        count: 1,
      };
    }
  };

  postOrder = async () => {
    const {
      name,
      phone,
      day,
      time,
      city,
      street,
      house,
      apartment,
      floor,
      entrance,
      comment,
    } = this;

    const products = Object.values(this.basket).map((item) => {
      console.log(item);
      const ingr = item.product.initialIngredients.map(
        ({ count, ingredient }) => {
          return {
            count,
            _id: ingredient._id,
          };
        }
      );
      return {
        quantity: item.count,
        choise: item.product.choise._id,
        ingredients: ingr,
      };
    });

    console.log(products);

    const orderData = {
      user: {
        name,
        phone,
      },
      delivery_time: {
        day,
        time,
      },
      address: {
        city,
        street,
        house,
        apartment,
        floor,
        entrance,
        comment,
      },
      products,
    };
    console.log(orderData);
    await postOrder(orderData);
  };

  get basketArray() {
    return Object.values(this.basket);
  }

  basketPrice = () => {
    const arrPrice = this.basketArray.map((item) => {
      return item?.count * item?.product?.choise?.price;
    });

    if (arrPrice.length) {
      return arrPrice.reduce((prev, currentValue) => prev + currentValue);
    } else {
      return arrPrice.length;
    }
  };

  get productsCount() {
    return Object.values(this.basket).reduce(
      (prev, current) => prev + current.count,
      0
    );
  }

  increaseCount = (productId) => {
    this.basket[productId] = {
      ...this.basket[productId],
      count: ++this.basket[productId].count,
    };

    this.saveToStorage();
  };

  saveToStorage() {
    if (process.browser)
      localStorage.setItem("basket", JSON.stringify(this.basket));
  }

  deleteProduct = (productId) => {
    delete this.basket[productId];
  };

  decreaseCount = (productId) => {
    let { count } = this.basket[productId];
    if (!--count) {
      this.deleteProduct(productId);
    } else {
      this.basket[productId] = {
        ...this.basket[productId],
        count: --this.basket[productId].count,
      };
    }

    this.saveToStorage();
  };

  addProduct = (product) => {
    const productExistInCart = this.basket[product._id];

    if (productExistInCart) {
      this.increaseCount(product._id);
    } else {
      this.basket[product._id] = {
        product,
        count: 1,
      };
    }
    this.saveToStorage();
  };
}

export const BasketStoreInstance = new BasketStore();
export const BasketStoreInstanceCTX = createContext(BasketStoreInstance);
