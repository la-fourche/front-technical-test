import { useEffect, useState } from 'react';

export type ProductContent = {
    image: string;
    title: string;
    price: number;
    compare_at_price: number;
    inventory_quantity: number;
    body_html_safe: string | null;
    vendor: string;
    grams: number;
    weight: string;
    sku: string;
    id: number;
    product_image: string;
    handle: string;
};

export enum Page {
    NEXT,
    PREV
}

export const useProducts = () => {
    const [products, setProducts] = useState<ProductContent[]>();
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const res = await fetch(`http://localhost:8080/products?_page=${page}&_limit=20`);
            const data = await res.json();
            setProducts(data);
            setIsLoading(false);
        };
        fetchData();
    }, [page]);

    const handlePage = (action: Page) => {
        if (action === Page.NEXT) {
            setPage(prev => prev + 1);
        }
        if (action === Page.PREV && page > 1) {
            setPage(prev => prev - 1);
        }
    };
    return { products, handlePage, isLoading } as const;
};
