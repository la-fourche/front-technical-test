type ShoppingBasketButtonProps = {
    quantity: number;
};

export const ShoppingBasketButton = ({ quantity }: ShoppingBasketButtonProps) => {
    return (
        <div className='font-semibold'>
            {quantity > 0 ? (
                <button className='bg-[#FFE78D] px-2 py-1 rounded-lg'>Ajouter au panier</button>
            ) : (
                <button className='bg-[#FFE78D] px-2 py-1 rounded-lg'>
                    Me notifier quand le produit est de retour
                </button>
            )}
        </div>
    );
};
