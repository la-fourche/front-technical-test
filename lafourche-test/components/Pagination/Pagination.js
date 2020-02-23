import Link from 'next/link';

import './Pagination.scss';

import ArrowLeft from '~/assets/icons/arrow-left.svg';
import ArrowRight from '~/assets/icons/arrow-right.svg';
import { Fragment } from 'react';

const Pagination = (props) => {
  const { page, size, limit, baseUrl, route, className } = props;

  const numberOfPages = Math.ceil(size / limit);

  const pageLinks = [...Array(numberOfPages)].map((e, index) => (
    <Fragment
      key={`${page}-${index}`}>
      <li
        className={`mx-2 px-2 LinkItem ${ page === index + 1  ? 'ActiveLink' : ''}`}>
        <Link
          href={{ pathname: route, query: { page: index+1 } }}
          as={formatLink(index + 1, baseUrl)}>
          <a> { index + 1 } </a>
        </Link>
      </li>
    </Fragment>
  ));

  return (
    <div className={`d-inline-flex ${className}`}>
      <Link
        href={{ pathname: route, query: { page: page-1 } }}
        as={ formatLink( page - 1, baseUrl) }>
        <img
          className={`Arrow ${ page <= 1 ? 'DisabledArrow' : null}`}
          src={ArrowLeft} />
      </Link> 
        <ul className="Pagination list-unstyled d-inline-flex m-0">
          { pageLinks }
        </ul>
      <Link
        href={{ pathname: route, query: { page: page+1 } }}
        as={ formatLink( page + 1, baseUrl) }>
        <img
          className={`Arrow ${ page >= numberOfPages ? 'DisabledArrow' : null}`}
          src={ArrowRight} />
      </Link>
    </div>
  );
}

const formatLink = (page, path) => `${path}?page=${page}`;

export default Pagination;