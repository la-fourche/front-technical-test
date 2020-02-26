import Link from "next/link";
import { ITEMS_TOTALS, ITEMS_PER_PAGES } from "../constants/mock";

const NB_PAGES = ITEMS_TOTALS / ITEMS_PER_PAGES;

const Pagination = ({ path, currentPage }) => {
  return (
    <>
      <nav className="navigation">
        <ul className="pagination">
          {currentPage > 1 ? (
            <li className="page-item">
              <Link
                href={{
                  pathname: "/collections/[name]",
                  query: { page: currentPage - 1 }
                }}
                as={`/collections/${path}?page=${currentPage - 1}`}
              >
                <p>Précédent</p>
              </Link>
            </li>
          ) : null}
          {[...Array(NB_PAGES + 1).keys()].slice(1, NB_PAGES + 1).map(page => {
            return (
              <li key={page} className="page-item">
                <Link
                  href={{
                    pathname: "/collections/[name]",
                    query: { page }
                  }}
                  as={`/collections/${path}?page=${page}`}
                >
                  <p className={`${currentPage === page && `active-page`}`}>
                    {page}
                  </p>
                </Link>
              </li>
            );
          })}
          {currentPage < 5 ? (
            <li className="page-item">
              <Link
                href={{
                  pathname: "/collections/[name]",
                  query: { page: currentPage + 1 }
                }}
                as={`/collections/${path}?page=${currentPage + 1}`}
              >
                <p>Suivant</p>
              </Link>
            </li>
          ) : null}
        </ul>
      </nav>
      <style jsx>{`
        li {
          list-style: none;
        }

        .navigation {
          display: flex;
          justify-content: center;
        }

        .pagination {
          display: flex;
          flex-direction: row;
        }

        .page-item {
          margin: 0 10px;
          cursor: pointer;
        }

        .active-page {
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default Pagination;
