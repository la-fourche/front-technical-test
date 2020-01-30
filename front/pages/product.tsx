import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Link from 'next/link';

class Product extends React.Component {
  state = {
    product: {},
  }
  componentDidMount(){
    const self: any = this;
    const verif = JSON.parse(localStorage.getItem('myKey:546726736522537625467'));
    const { data:d }: any = this.props;
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');
    if (d.length === 0) {
      if (verif && verif.length > 0) {
        self.props.dispatch({
          type: 'SET',
          data: verif,
        });
        this.filterData(myParam);
      } else {
        axios.get(`http://0.0.0.0:8080/products?objectID=${myParam}`).then(({headers, data}) => {
          self.setState({
            product:data[0],
          });
        })
      }
    } else {
      this.filterData(myParam);
    }
  }
  componentDidUpdate(prev){
    const { data }:any = this.props;
    if (prev.data != data){
      const urlParams = new URLSearchParams(window.location.search);
      const myParam = urlParams.get('id');
      this.filterData(myParam);
    }
  }
  filterData = (myParam) => {
    const {data:d}: any = this.props;
    const myData = d.filter(el => el.objectID == myParam);
    if (myData.length > 0)
      this.setState({ product: myData[0] })
  }
  render (){
    const { product }: any = this.state;
    const { data }: any = this.props;
    const { title, image, price, compare_at_price, vendor, weight, sku, inventory_quantity, body_html_safe }: any = product;
    return (
      <div style={{ padding: '30px' }}>
        <div><Link href="/">Retour</Link></div>
        <div><img style={{width:'300px'}} src={image}/></div>
        <div>{title}</div>
        <div style={{textDecoration: 'line-through'}}>{compare_at_price}€</div>
        <div>{price}€</div>
        <div>Quantité : {inventory_quantity}</div>
        <div>La description: {body_html_safe?body_html_safe:"-"}</div>
        <div>Le fabriquant : {vendor}</div>
        <div>Le poids: {weight}</div>
        <div>Le SKU: {sku}</div>
        <div>
          {inventory_quantity > 0 ? <button>Ajouter au panier</button> : <button>Me notifier quand le produit est de retour</button>}
          {/* Un bouton "Ajouter au panier" si l'article est en stock ou un bouton "Me notifier quand le produit est de retour" sinon (les boutons ne seront reliés à rien)</div> */}
        </div>
      </div>
    );
  };

}

export default connect(s => s)(Product);