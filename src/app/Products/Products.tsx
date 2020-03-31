import * as React from "react";
import Link from 'next/link'


import CustomLayout from "../../component/CustomLayout/CustomLayout";
import Pagination from "../../component/Pagination/Pagination";
import PaginationItem from "../../component/PaginationItem/PaginationItem";

import "./styles.css"
import {ProductDTO} from "../../model/ProductDTO";
import ProductItem from "./ProductItem/ProductItem";

interface Props {
    pageIndex: number;
    products: ProductDTO[];
}

export default class Products extends React.PureComponent<Props> {


    renderProducts(){
        const {products} = this.props;

        return products.map((product) => {
            return (
                <ProductItem
                    key={product.id}
                    product={product} />
            );
        });
    }


    renderPaginationItem(i: number) {

        const {pageIndex} = this.props;
        const position = i + 1;

        return (
            <Link href={"/products/" + position.toString()} as={"/products/" + position.toString()}>
                <a>
                    <PaginationItem
                        label={position.toString()}
                        selected={pageIndex === i}
                    />
                </a>
            </Link>
        );
    }


    render() {
        return (
            <CustomLayout
                title={"Collection de produits"}
            >

                <div id={"products"}>

                    <div id={"title-wrapper"}>
                        <h1>Collection de produits</h1>
                    </div>

                    <div id={"products-list"}>
                        {this.renderProducts()}

                    </div>


                    <div id={"pagination-wrapper"}>
                        <Pagination
                            count={5}
                            renderItem={this.renderPaginationItem.bind(this)}
                        />
                    </div>

                </div>
            </CustomLayout>
        );
    }
}