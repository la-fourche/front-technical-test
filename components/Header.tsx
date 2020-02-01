import Link from 'next/link';
import { NextComponentType } from 'next';
export const config = { amp: true };

const linkStyle = {
    marginRight: 15
};

const Header: NextComponentType = () => (
    <div>
        <Link href={'/'}>
            <a style={linkStyle}>Accueil</a>
        </Link>
        <Link href={'/products?page=1&limit=20'}>
            <a style={linkStyle}>Produits</a>
        </Link>
    </div>
);

export default Header;
