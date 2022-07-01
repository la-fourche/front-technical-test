import { useRouter } from 'next/router';
import { PriceInformation } from '../src/component/PriceInformation';
import { useProductDetails } from '../src/hooks/useProductDetails';

const Product = () => {
    const { query } = useRouter();
    const [productDetails, isLoading] = useProductDetails(query.handle);

    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            {productDetails && !isLoading && (
                <div className='flex items-center space-x-4 w-full'>
                    <img src={productDetails[0]?.image} className='object-cover w-1/2' alt='test' />
                    <div className='w-full'>
                        <div className='w-full p-2'>
                            <b className='text-4xl'>{productDetails[0]?.title}</b>
                            <p className='mt-4'>{productDetails[0]?.vendor}</p>
                            <span className='text-lg font-semibold'>Poids: {productDetails[0]?.grams} g</span>
                            <PriceInformation
                                price={productDetails[0]?.price}
                                previousPrice={productDetails[0]?.compare_at_price}
                                inventoryQuantity={productDetails[0]?.inventory_quantity}
                            />
                            {productDetails[0]?.body_html_safe && (
                                <div>
                                    <b className='text-lg'>Description:</b>
                                    <p className='w-2/3'>{productDetails[0]?.body_html_safe}</p>
                                </div>
                            )}
                            <p className='text-xs font-semibold mt-4'>SKU: {productDetails[0]?.sku}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Product;
