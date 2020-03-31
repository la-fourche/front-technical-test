import * as React from 'react'

import Products from "../src/app/Products/Products";
import API from "../src/tool/API";
import {ProductDTO} from "../src/model/ProductDTO";

type Props = {
    pageIndex: number
    products: ProductDTO[];
}

interface Query {
    pagePosition: string;
}


export default class products extends React.Component<Props> {

    static async getInitialProps({query, res}: { query: Query, res: any }) {

        let pagePosition = parseInt(query.pagePosition);

        if(isNaN(pagePosition) || pagePosition < 0){
            pagePosition = 1;
        }

        const pageIndex = pagePosition - 1;

        const products = await API.getProducts(pageIndex);

        return {
            pageIndex,
            products
        }
    }

    render() {

        const {pageIndex, products} = this.props;

        return (
            <Products
                pageIndex={pageIndex}
                products={products}
            />
        );
    }
}



