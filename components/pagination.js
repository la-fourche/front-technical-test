const Pagination = () => {
  return (
    <>
      <nav className="navigation">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
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
