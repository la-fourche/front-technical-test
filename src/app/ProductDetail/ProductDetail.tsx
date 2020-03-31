import * as React from "react";
import CustomLayout from "../../component/CustomLayout/CustomLayout";
import {ProductDTO} from "../../model/ProductDTO";

import "./styles.css"
import "../../styles/helper.css"

interface Props {
    product: ProductDTO;
}

export default class ProductDetail extends React.PureComponent<Props> {


    render() {

        const {product} = this.props;

        return (
            <CustomLayout
                title={product.title}
            >
                <div id={"product-detail"}>



                    <div id={"product-detail-content"}>

                        <img
                            id={"product-detail-image"}
                            src={product.image}
                            alt={"image non disponible"}
                        />

                        <div id={"product-detail-action"}>
                            <button>Ajouter au panier</button>
                            <button id={"notify-button"}>Me notifier quand le produit est de retour</button>
                        </div>

                        <h1>{product.title}</h1>

                        <span>Prix: {product.price}€</span>
                        <span>Prix initial:
                            <span id={"initialPrice"}>{product.compare_at_price}€</span>
                        </span>
                        <span>Poids: {product.weight}</span>
                        <span>Fabriquant: {product.vendor}</span>
                        <span>Quantité: {product.inventory_quantity}</span>
                        <span>SKU: {product.sku}</span>
                        <span className={"mTop10"}>{product.body_html_safe}</span>


                    </div>

                </div>
            </CustomLayout>
        );
    }
}