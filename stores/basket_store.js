import {createContext} from 'react';
import {makeAutoObservable, toJS} from 'mobx';
import {instance} from "./PostStore";

function postOrder(data) {
    return instance.post('order', data);
}

function getIngredients() {
    return instance.get('products/ingredients');
}

class BasketStore {
    basket = {};
    ingredients=[]


    name = ''
    phone = ''
    day=''
    time=''
    city= "м. Івано-Франківськ"
    street= ""
    house= ""
    apartment= ""
    floor= ""
    entrance= ""
    comment= ""

    changeUserInfo = ({name, value}) => {
        this[name] = value
    }


    constructor(initialData = {}) {
        makeAutoObservable(this)
        const basket = process.browser && localStorage.getItem('basket')
        if (basket) {
            this.basket = JSON.parse(basket)
        }
    }

    getIngredients = async () => {
      const response = await getIngredients();
      console.log(response)
      this.ingredients = response.data
    }

    postOrder = async () => {

        const {
            name ,
            phone ,
            day,
            time,
            city,
            street,
            house,
            apartment,
            floor,
            entrance,
            comment} = this

        const products = Object.values(this.basket).map((item)=>{
            return {
                quantity: item.count,
                choise: item.product.choise._id,
                ingredients:[
                    {
                        count:3,
                        _id:"60b8e1d5ade16f00152d45d0"
                    }
                ]
            }
        })

        console.log(products)
        
        const orderData = {
            user: {
                name,
                phone
            },
            delivery_time: {
                day,
                time
            },
            address: {
                city,
                street,
                house,
                apartment,
                floor,
                entrance,
                comment
            },
            products
        }
        console.log(orderData)
        // await postOrder(orderData);

    }

    get basketArray() {
        return Object.values(this.basket);
    }

    basketPrice = () => {
        const arrPrice = this.basketArray.map((item) => {
            return item?.count * item?.product?.choise?.price
        })

        if (arrPrice.length) {
            return arrPrice.reduce((prev, currentValue) => prev + currentValue)
        } else {
            return arrPrice.length
        }
    }

    get productsCount() {
        return Object.values(this.basket).reduce((prev, current) => prev + current.count, 0);
    }

    increaseCount = (productId) => {
        this.basket[productId] = {
            ...this.basket[productId],
            count: ++this.basket[productId].count
        }

        this.saveToStorage()
    }

    saveToStorage() {
        if (process.browser) localStorage.setItem('basket', JSON.stringify(this.basket))
    }

    deleteProduct = (productId) => {
        delete this.basket[productId]
    }

    decreaseCount = (productId) => {
        let {count} = this.basket[productId]
        if (!--count) {
            this.deleteProduct(productId)
        } else {
            this.basket[productId] = {
                ...this.basket[productId],
                count: --this.basket[productId].count
            }
        }

        this.saveToStorage()
    }


    addProduct = (product) => {
        const productExistInCart = this.basket[product._id];

        if (productExistInCart) {
            this.increaseCount(product._id)
        } else {
            this.basket[product._id] = {
                product,
                count: 1
            };
        }
        ;
    }


}

export const BasketStoreInstance = new BasketStore()
export const BasketStoreInstanceCTX = createContext(BasketStoreInstance)

