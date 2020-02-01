import React, { useState } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { NextPageContext } from 'next';
import Layout from '../components/Layout';
import Pagination from 'react-js-pagination';

const imageStyle = {
    width: '64px',
    height: '64px'
};

const cardStyle = {
    border: '1px solid grey',
    width: '20vh',
    height: '20vh',
    marginBottom: '3vh'
};

const noDecoration = {
    textDecoration: 'none',
    color: 'black'
}

interface ProductCardInterface {
    title: string,
    handle: string,
    price: number,
    compareAtPrice: number,
    image: string
}

const ProductCard = (props: ProductCardInterface) => (
    <li>
        <Link href={`/product?handle=${props.handle}`}>
            <a style={noDecoration}>
                <div style={cardStyle}>
                    <img style={imageStyle} src={props.image} alt={props.title} />
                    <h6>{props.title}</h6>
                    <span>{props.price}</span>
                    <span>{props.compareAtPrice}</span>
                </div>
            </a>
        </Link>
    </li>
);

interface ProductsProps {
    currentPage: number,
    numberOfPages: number,
    products: any[]
}

const Products = (props: ProductsProps) => {
    const [
        data,
        setData
    ] = useState(props);
    const [
        activePage,
        setPageNumber
    ] = useState();

    async function handlePageChange(pageNumber: number) {
        setPageNumber({activePage: pageNumber});
    }

    return (
        <Layout>
            <h1>Mes produits</h1>
            <style jsx>{`
            ul { list-style: none; display: flex; flex-wrap: wrap; justify-content: space-between; }
            li { flex: auto; display: inline; }
            `}</style>
            <ul>
                {(() => props.products.map((product: any) =>
                    <ProductCard
                        title={product.title}
                        handle={product.handle}
                        price={parseFloat(product.price)}
                        compareAtPrice={parseFloat(product.compare_at_price)}
                        image={product.image}
                    />
                ))()}
            </ul>
            <Pagination
                activePage={activePage}
                onChange={handlePageChange}
                totalItemsCount={props.numberOfPages}
            />
        </Layout>
    );
};

Products.getInitialProps = async (ctx: NextPageContext) => {
    const res = await fetch(`http://api/products?_page=${ctx.query.page}&_limit=${ctx.query.limit}`);
    const data = await res.json();
    const numberOfPages: number = parseInt('' + (data.length / Number(ctx.query.limit)));
    const currentPage = ctx.query.page;


    return {
        currentPage: currentPage,
        numberOfPages: numberOfPages,
        products: data
    };
};

export default Products;
