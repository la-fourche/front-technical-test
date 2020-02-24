import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';

interface Props {
  children;
  title: string;
}

const logoUrl =
  'https://cdn.shopify.com/s/files/1/0100/6203/7088/files/FOURCHE_DIGI_WHITE_150DPIcroped_422a0ffa-dea4-4cc0-8ce7-f83195157efa.svg?55832';
const alt =
  'La Fourche | economisez-de-25-a-50-sur-les-produits-bio-les-plus-ecologiques-et-naturels-alimentation-bio-vrac-maquillage-bio-couches-ecologiques-zero-dechet-droguerie-ecologique-hygiene-et-soins-bio';

const Layout = ({ children, title }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <img className="header__logo" src={logoUrl} alt={alt} />
      <nav>
        <Link href="/">
          <a>Accueil</a>
        </Link>
        <Link href="/products/Products">
          <a>Produits</a>
        </Link>
      </nav>
    </header>
    {children}
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
      }
      .flex {
        display: flex;
        justify-content: center;
      }
    `}</style>
    <style jsx>{`
      header {
        background-color: #30656b;
        color: #fff;
      }
      .header__logo {
        width: 20vw;
        padding: 10px;
      }
      nav {
        background-color: #fff;
        color: #30656b;
        margin: 10px 0;
      }

      nav a {
        font-size: 20px;
        font-weight: 800;
        padding: 0 20px;
      }
      a:link {
        text-decoration: none;
      }

      a:visited {
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      a:active {
        text-decoration: underline;
      }
    `}</style>
  </div>
);

export default Layout;
