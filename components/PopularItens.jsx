import { client } from "../app/lib/sanity";
import Link from "next/link";
import PopularItensCarousel from "./PopularItensCarousel";

// Pegar Dados
const getData = async () => {
  const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'anel']._id, categories)] {
  _id, 
    name, 
    description, 
    images, 
    price,
    price_id,
    'slug': slug.current,
    'categories': categories[] -> {
    name}
}`;
  const data = await client.fetch(query);
  return data;
};

const PopularItens = async () => {
  const joias = await getData();
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-center">As Mais Vendidas</h2>
        <p className="text-center mb-[30px]">
          O mundo das Joias Premium para seu gosto
        </p>
        <PopularItensCarousel joias={joias} />
        <Link href="/nossas-joias">
          <button className="btn btn-accent mx-auto">Ver Todas as Joias</button>
        </Link>
      </div>
    </section>
  );
};

export default PopularItens;
