import * as React from 'react'

import API from "../src/tool/API";
import {ProductDTO} from "../src/model/ProductDTO";
import ProductDetail from "../src/app/ProductDetail/ProductDetail";

type Props = {
    product: ProductDTO;
}

interface Query {
    productId: string;
}

export default class ProductDetails extends React.Component<Props> {

    static async getInitialProps({query, res}: { query: Query, res: any }) {
        const products = await API.getProduct(query.productId);

        return {
            product:  products[0]
        }
    }

    render() {

        const {product} = this.props;

        return (
            <ProductDetail product={product}/>
        );
    }
}



