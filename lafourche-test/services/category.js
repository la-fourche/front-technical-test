import fetch from 'isomorphic-unfetch';

const HOST = 'http://localhost:8080'; // should move this to an env file

const getProducts = async function(page, pageSize) {
  const res = await fetch(`${HOST}/products?_page=${page}&_limit=${pageSize}`);
  const data = await res.json();

  if(!data || data.length === 0) throw { status: 404, message: 'category not found'};
  return data;
};

export default getProducts;