import axios from "axios";

import {config} from "../const/config";

export default class API {

    static async getProducts(page: number) {

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

}