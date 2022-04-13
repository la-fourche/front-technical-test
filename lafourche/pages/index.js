import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';

export async function getServerSideProps() {
  const res = await fetch("http://localhost:8080/products?_page=1&_limit=20")
  const products = await res.json()

  // Pass data to the page via props
  return {
    props: { products }
  }
}

export default function Home({products}) {
  return (
    <>
      <Head>
        <title>Site Lafourche</title>
      </Head>
      <div class="container p-0 mt-5 mb-5">
        <div class="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4">
          {products && products.length > 0 ? (
            products.map((product, i) => (
              <div class="col">
                <div class="card" key={i}>
                  <Link href={{ pathname: '/products', query: { handle: product.handle } }}>
                    <a>
                      <div class="card-img-top"><Image src={product.image} width="500" height="500" /></div>
                      <div class="card-body text-body">
                        <h5 class="card-title"><ins>{product.title}</ins></h5>
                        <div class="list-inline">
                          <span class="list-inline-item"><strong>{product.price}€</strong></span>
                          <span class="list-inline-item text-muted"><del>{product.compare_at_price}€</del></span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No result</p>
          )}
          </div>
        </div>
    </>
  )
}