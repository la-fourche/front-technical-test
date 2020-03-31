import axios from "axios";

import {config} from "../const/config";

export default class API {

    static async getAllProducts(page: number) {

        const res = await axios(config.productsUrl, {
            method: 'GET',
            params: {
                _page: page,
                _limit: 20
            }
        });

        if (res.status === 200) {
            return res.data;
        }

        return [];

    }

    static async getProduct(productId: string) {

        const res = await axios(config.productsUrl, {
            method: 'GET',
            params: {
                handle: productId,
            }
        });

        return res.data;

    }


}