import Link from "next/link";
import Layout from "../components/layout";

const Index = () => {
  return (
    <>
      <Layout>
        <h1>Julien Thibeaut - Test technique</h1>
        <Link href="/collections/[name]" as={`/collections/animalerie-bio`}>
          <a>Lien vers une collection</a>
        </Link>
      </Layout>
      <style jsx global>{`
         {
          /* * {
          padding: 0;
          margin: 0;
        } */
        }
      `}</style>
    </>
  );
};

export default Index;
