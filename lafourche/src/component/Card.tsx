import Link from 'next/link';
import { computePrice } from '../utils/utils';

type CardProps = {
    image: string;
    name: string;
    price: number;
    handle: string;
};

export const Card = ({ image, name, price, handle }: CardProps) => {
    const newPrice = computePrice(price);

    return (
        <Link href={{ pathname: `/product`, query: { handle: handle } }} className='w-full'>
            <div className='w-2/3 cursor-pointer text-white'>
                <img src={image} className='object-contain h-40 w-full' alt='test' />
                <div className='bg-[#3C0805] rounded-b-xl px-1'>
                    <p title={name} className='truncate'>
                        {name}
                    </p>
                    <b className='text-lg'>{newPrice}</b>
                </div>
            </div>
        </Link>
    );
};
