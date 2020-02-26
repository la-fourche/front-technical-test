import Link from "next/link";

const Index = () => {
  return (
    <>
      <div>
        <h1>Julien Thibeaut - Test technique</h1>
        <Link href="/collections/[name]" as={`/collections/animalerie-bio`}>
          <a>Lien vers une collection</a>
        </Link>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default Index;
