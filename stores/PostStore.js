import { createContext } from "react";
import { makeAutoObservable, toJS } from "mobx";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://pizzavovaapi.herokuapp.com/",
});

function getData() {
  return instance.get("products/categories");
}

function getProducts(id) {
  return instance.post("products/search", {
    categoryId: id,
  });
}

function getProductsId(id) {
  return instance.get(`products/${id}`);
}

class ProductBasket {
  _id = " ";
  description = " ";
  img = " ";
  ingredients = [];
  initialIngredients = [];
  title = " ";
  choise = {};

  constructor(data) {
    Object.keys(data).map((item) => {
      if (this[item]) this[item] = data[item];
    });
  }
}

class ProductsStore {
  products = [];
  product = {};
  categories = [];

  constructor(initialData = {}) {
    makeAutoObservable(this);
    this.getCategories();
  }

  async getCategories() {
    const data = await getData();
    this.categories = data?.data;

    console.log(
      data?.data.find((item) => {
        return item.name === "pizza";
      })
    );

    const productId = (name) => {
      return data?.data.find((item) => {
        return item.name === name;
      });
    };
    if (process.browser) {
      const categories = (name) => {
        switch (name) {
          case "/":
            return productId("Піца");
          case "/salad":
            return productId("Салати");
          case "/drinks":
            return productId("Напої");
          default:
            return "/";
        }
      };

      await this.getProducts(categories(window.location.pathname)._id);
    }
  }

  productToBasket = (productId, choiseId, initialIngredients) => {
    const product = this.products.filter((item) => item._id === productId)[0];
    const choise = product?.choise.filter((item) => item._id === choiseId)[0];

    console.log(toJS(product));

    const basketProduct = new ProductBasket({
      ...product,
      choise,
      initialIngredients,
    });

    return basketProduct;
  };

  getProducts = async (id) => {
    const data = await getProducts(id);
    console.log({ data });
    this.products = data?.data;
  };

  getProductsId = async (id) => {
    const data = await getProductsId(id);
    console.log({ data });
    this.product = data?.data;
    return data;
  };
}

export const ProductsStoreInstance = new ProductsStore();
export const ProductsStoreInstanceCTX = createContext(ProductsStoreInstance);
