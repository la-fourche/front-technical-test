import Router from 'next/router'
import Link from 'next/link'

import DefaultLayout from '~/layouts/DefaultLayout';


const TITLE = 'La Fourche | Magasin bio en ligne jusqu’à 50% moins cher';

const Home = () => (
  <>
    <DefaultLayout title={TITLE}>
    <div className="container-fluid p-5">
      <Link href="/category/[hash]" as="/category/sante-bio">
        <a className="mx-3"> Example of a category page (aka collection) </a>
      </Link>
      <Link href="/product/[handle]" as="/product/argalys-vitamines-b12-1-mg-iode-et-selenium-60-gelules-vegan">
        <a className="mx-3">  Example of a product page </a>
      </Link>
      <Link href="/product/[handle]" as="/product/saveurs-nature-ballotin-d-escargots-praline-enrobes-de-chocolat-noir-140g-bio">
        <a className="mx-3">  Example of a sold out product page </a>
      </Link>

      <p className="mx-3"> I used the same image for all products because the image links were broken (expired)</p>
    </div>
    </DefaultLayout>
  </>
)

export default Home;