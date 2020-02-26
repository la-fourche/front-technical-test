import Link from "next/link";
import Layout from "../components/layout";

const Index = () => {
  return (
    <Layout>
      <h1>Julien Thibeaut - Test technique</h1>
      <p>Réalisé en ≃3h30</p>
      <p>
        Comme demandé, on a une app comprenant une page collection de produits,
        paginée par 20, ainsi qu'une page fiche produit.
      </p>
      <p>Sans la contrainte de temps j'aurais pu:</p>
      <ul>
        <li>Utiliser Typescript</li>
        <li>Appronfondir du côté PWA</li>
        <li>Ajouter du style</li>
        <li>Factoriser du code/créer des components</li>
      </ul>
    </Layout>
  );
};

export default Index;
