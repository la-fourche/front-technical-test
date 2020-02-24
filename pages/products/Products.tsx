import React, { useState } from 'react';
import Layout from '../../components/Layout';
import ProductList from '../../components/ProductList';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import Pagination from 'react-js-pagination';

const Products = (data: any) => {
  const [activePage, setActivePage] = useState(0);
  const router = useRouter();
  console.log(router, data);
  return (
    <Layout title="La fourche">
      <div>
        {data.map((product, index) => (
          <div key={index}>
            <Card />
          </div>
        ))}
      </div>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={20}
        totalItemsCount={100}
        pageRangeDisplayed={5}
        onChange={(pageNumber: number) => setActivePage(pageNumber)}
      />
    </Layout>
  );
};

const Card = () => {
  return <div>card</div>;
};

Products.getInitialProps = async () => {
  const url: string = 'http://localhost:8080';
  const res = await fetch(`${url}/products`);
  const data = await res.json();

  return {
    data,
  };
};

export default Products;
