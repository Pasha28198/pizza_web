import { WrapperRequest } from "./wrapper.api";
class ProductApi extends WrapperRequest {

    getCategories = () => {
        return this.get(`/products/categories`);
    };

}

export const ProductApiProvider = new ProductApi();