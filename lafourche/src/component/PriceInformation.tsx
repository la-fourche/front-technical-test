import { computePercentage, computePrice } from '../utils/utils';
import { ShoppingBasketButton } from './ShoppingBasketButton';

type PriceInformationProps = {
    price: number;
    previousPrice: number;
    inventoryQuantity: number;
};
export const PriceInformation = ({ price, previousPrice, inventoryQuantity }: PriceInformationProps) => {
    return (
        <div className='bg-[#F9F2EF] w-2/3 p-2 flex justify-between items-center my-4'>
            <div>
                <div className='flex items-center space-x-4'>
                    <b className='text-3xl'>{computePrice(price)}</b>
                    <span className='rounded-full font-semibold text-lg text-white bg-[#FF573E] px-2 py-1'>
                        {computePercentage(price, previousPrice)}
                    </span>
                </div>
                <div className='flex items-center space-x-2'>
                    <p className='text-sm'>Prix de référence</p>
                    <div
                        title='Le prix de référence est calculé sur une base de magasins physiques et en ligne représentative du marché bio en France.'
                        className='text-white w-4 h-4 text-xs bg-black text-center cursor-pointer rounded-full'
                    >
                        ?
                    </div>
                    <span className='line-through font-semibold text-gray-400'>{computePrice(previousPrice)}</span>
                </div>
            </div>
            <ShoppingBasketButton quantity={inventoryQuantity} />
        </div>
    );
};
