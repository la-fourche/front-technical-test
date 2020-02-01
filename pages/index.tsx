import { NextPage } from 'next';
import Layout from '../components/Layout';
import React from 'react';
import fetch from 'isomorphic-unfetch';
export const config = { amp: true };

const Index: NextPage = () => (
    <Layout>
    </Layout>
);

Index.getInitialProps = async () => {
    const res = await fetch('http://api/products');
    const data = await res.json();

    return {
        products: data
    };
};

export default Index;
