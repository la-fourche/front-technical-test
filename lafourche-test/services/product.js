import fetch from 'isomorphic-unfetch';

const HOST = 'http://localhost:8080'; // should move this to an env file

const getProduct = async function(handle) {
  const res = await fetch(`${HOST}/products?handle=${handle}`);
  const data = await res.json();
  
  if(!data || data.length === 0) throw { status: 404, message: 'product not found'};
  return data[0];
};

export default getProduct;