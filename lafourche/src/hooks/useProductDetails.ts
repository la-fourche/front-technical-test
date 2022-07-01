import { useEffect, useState } from 'react';
import { ProductContent } from './useProducts';

export const useProductDetails = (product: string | string[] | undefined) => {
    const [productDetails, setProductDetails] = useState<ProductContent[]>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchProductDetails = async () => {
            setIsLoading(true);
            const response = await fetch(`http://localhost:8080/products?handle=${product}`);
            const data = await response.json();
            setProductDetails(data);
            setIsLoading(false);
        };
        fetchProductDetails();
    }, [product]);

    return [productDetails, isLoading] as const;
};
