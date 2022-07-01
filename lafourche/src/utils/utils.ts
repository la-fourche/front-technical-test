export const computePercentage = (currentPrice: number, previousPrice: number) => {
    const percentage = (previousPrice - currentPrice) / previousPrice;
    return `~${Math.round(percentage * 100)}%`;
};

export const computePrice = (price: number) => {
    if (price.toString().split('.')[1]?.length == 1) return `${price.toString()}0 €`;
    return `${price.toString()} €`;
};
