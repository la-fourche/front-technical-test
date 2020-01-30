import React, { useState } from 'react';
import axios from 'axios';
import Product from '../components/product';
import { connect } from 'react-redux';

class Home extends React.Component {
  state = {
    page: 1,
    pages: 0,
  }
  componentDidMount(){
    const self: any = this;
    const verif = JSON.parse(localStorage.getItem('myKey:546726736522537625467'));
    if (verif && verif.length > 0) {
      self.props.dispatch({
        type: 'SET',
        data: verif,
      });
    }
    axios.get(`http://0.0.0.0:8080/products/?_page=&_limit=20`).then(({headers, data}) => {
      const pages_ = parseInt(headers['x-total-count']) / 20;
      self.setState({pages:pages_});
      localStorage.setItem('myKey:546726736522537625467', JSON.stringify(data))
      self.props.dispatch({
        type: 'SET',
        data,
      });
    })
  }
  componentDidUpdate(prevProps) {
    const { data }: any = this.props;
    if (prevProps.data !== data) {
      localStorage.setItem('myKey:546726736522537625467', JSON.stringify(data))  
    }
  }
  render() {
  const props: any = this.props;
  const { data:products, dispatch } = props;
  const { page, pages } = this.state;
  const getData = async (n: number) => {
    const {headers, data} = await axios.get(`http://0.0.0.0:8080/products/?_page=${n}&_limit=20`);
    const pages_ = parseInt(headers['x-total-count']) / 20;
    this.setState({pages:pages_});
    dispatch({
      type: 'SET',
      data,
    });
  }
  const getPage = (e:any) => {
    const n = e.target.id;
    this.setState({page:n});
    getData(n);
  }
  const Pagination = () => {
    let pages_ = [];
    for(var i = 1; i < pages + 1; i++){
      pages_.push(
        <a key={i+Date.now()} href="#" style={{ marginRight: '15px' }} id={i.toString()} onClick={getPage}>{i}</a>
      )
    }
    return (<div>
      {pages_}
    </div>);
  }
  const PageProducts = () => products.map((product: any, index: number) => <Product key={index} product={product}/>);
  return (
    <div>
      <PageProducts />
      <Pagination />
    </div>
  );
};
}
export default connect(s => s)(Home);