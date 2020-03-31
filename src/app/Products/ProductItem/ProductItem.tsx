import * as React from "react";
import {ProductDTO} from "../../../model/ProductDTO";

import "./styles.css"
import "../../../styles/helper.css";
import Link from "next/link";
import Navigation from "../../../tool/Navigation";

interface Props {
    product: ProductDTO;
}

export default class ProductItem extends React.PureComponent<Props> {

    render() {

        const {product} = this.props;


        const hrefAndAs = Navigation.buildUrlForProduct(product.handle);

        return (

            <Link
                href={hrefAndAs.href}
                as={hrefAndAs.as}
            >
                <a>

                    <div id={"product-item"}>
                        <div id={"product-item-image-wrapper"}>
                            <img
                                id="product-item-image"
                                src={product.image}
                            />
                        </div>

                        <div id={"product-item-description-wrapper"}>
                            <span className={"product-item-description-text bold"}>{product.title}</span>
                            <span className={"product-item-description-text mTop10"}>Prix: {product.price}€</span>
                        </div>
                    </div>

                </a>
            </Link>
        );
    }
}