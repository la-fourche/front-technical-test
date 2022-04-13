import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export async function getServerSideProps(context) {
  const id = context.query.handle;
  const res = await fetch(`http://localhost:8080/products?handle=${id}`)
  const data = await res.json()

  return {
    props: { data }
  }
}

function Products({ data }) {
  return (
    <>
    <div class="container mt-5 mb-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <div class="card">
            <div class="row">
              <div class="col-md-6">
                <div class="images p-3"><Image src={data[0].image} width="500" height="500" /></div>
              </div>
              <div class="col-md-6">
                <div class="product p-4">
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center"> 
                      <Link href="/">
                        <a class="text-body"><i class="bi-arrow-left"></i> <span class="ml-1">Retour</span> </a>
                      </Link>
                    </div>
                  </div>
                  <div class="mt-4 mb-3">
                    <h5 class="text-uppercase">{data[0].title}</h5>
                    <div class="price d-flex flex-row align-items-center list-inline">
                       <span class="act-price list-inline-item"><strong>{data[0].price}€</strong></span>
                       <span class="text-muted list-inline-item"><del>{data[0].compare_at_price}€</del></span>
                    </div>
                  </div>
                  <p class="about">{data[0].body_html_safe}</p>
                  <p class="about">Il reste {data[0].inventory_quantity} en stock.</p>
                  <p class="about">Ce produit est vendu par {data[0].vendor}</p>
                  <p class="about">Poids : {data[0].weight}</p>
                  <p class="about">SKU : {data[0].sku}</p>
                  <div class="cart mt-4 align-items-center"> 
                    {data[0].inventory_quantity > 0 ?
                      <button class="btn btn-success text-uppercase mr-2 px-4">Ajouter au panier <i class="bi-cart"></i></button> 
                      : <button class="btn btn-danger text-uppercase mr-2 px-4">Me notifier quand le produit est de retour <i class="bi-enveloppe"></i></button> 
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Products;