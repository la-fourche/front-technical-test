import Link from "next/link";

const ITEMS_TOTALS = 100;
const ITEMS_PER_PAGES = 20;

const NB_PAGES = ITEMS_TOTALS / ITEMS_PER_PAGES;

const Pagination = ({ path, currentPage }) => {
  return (
    <>
      <nav className="navigation">
        <ul className="pagination">
          {currentPage > 0 ? (
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
          {[...Array(NB_PAGES).keys()].map(page => {
            return (
              <li key={page} className="page-item">
                <Link
                  href={{
                    pathname: "/collections/[name]",
                    query: { page: page + 1 }
                  }}
                  as={`/collections/${path}?page=${page + 1}`}
                >
                  <p>{page + 1}</p>
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
        }
      `}</style>
    </>
  );
};

export default Pagination;
