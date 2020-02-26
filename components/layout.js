import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <Header />
        {children}
      </div>
      <style jsx global>{`
        body {
          font-family: Arial, Helvetica, sans-serif;
        }

        .layout {
          margin-left: auto;
          margin-right: auto;
          width: 100%;
          max-width: 1080px;
          padding-left: 20px;
          padding-right: 20px;
        }
      `}</style>
    </>
  );
};

export default Layout;
