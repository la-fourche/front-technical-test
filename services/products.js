import fetch from "isomorphic-unfetch";
import { API_URL } from "../util/apiAdapter";
import { ITEMS_PER_PAGES } from "../constants/mock";

// @todo: errors handling
export const getProducts = async ({ page }) => {
  const res = await fetch(
    `${API_URL}/products?_page=${!page ? `0` : page}&_limit=${ITEMS_PER_PAGES}`
  );
  const products = await res.json();
  return products;
};

export const getProduct = async ({ slug }) => {
  const res = await fetch(`${API_URL}/products?handle=${slug}`);
  const product = await res.json();
  return product;
};
