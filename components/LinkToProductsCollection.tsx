import Link from 'next/link';

interface LinkToProductsCollectionProps {
    page: number,
    limit: number,
    label: string,
}

const LinkToProductsCollection = (props: LinkToProductsCollectionProps) => {
    return (
        <Link href={`/products?page=${props.page}&limit=${props.limit}`}>
            <a>{props.label}</a>
        </Link>
    );
};

export default LinkToProductsCollection;
