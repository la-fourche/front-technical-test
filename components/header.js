import Link from "next/link";

const Header = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <ul className="">
            <li>
              <Link href="/">
                <h1>La fourche</h1>
              </Link>
            </li>
            <li>
              <Link href="/collections/animalerie-bio">
                <p>Collection animalerie bio</p>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <style jsx>{`
        li {
          list-style: none;
        }

        nav > ul {
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        nav > ul > li {
          margin-right: 32px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Header;
