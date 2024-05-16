import { client, urlFor } from "../../lib/sanity";
import Image from "next/image";
import AddToCartBtn from "../../../components/AddToCartBtn";
import Link from "next/link";

import {
  AlertTriangle,
  Clock,
  PackageCheck,
  RefreshCw,
  ChevronLeft,
} from "lucide-react";

const getData = async (slug) => {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0]{
    _id,
    images,
    price,
    price_id,
    name,
    description,
    "slug": slug.current,
    "category": categories->{name}
  }`;
  const data = await client.fetch(query);
  return data;
};

const ProductDetails = async ({ params }) => {
  const joia = await getData(params.slug);
  return (
    <section className="pt-24">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-14">
          <div className="xl:flex-1 h-[460px] bg-white/5 border xl:w-[700px] xl:h-[540px] flex justify-center items-center">
            <Image
              src={urlFor(joia.images[0]).url()}
              width={250}
              height={250}
              priority
              alt=""
            />
          </div>
          <div className=" flex-1 flex flex-col justify-center items-start gap-10">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <ChevronLeft size={20} />
              Voltar
            </Link>
            <div className="flex flex-col gap-6 items-start ">
              <div>
                <h3>{joia.name}</h3>
                <p className="text-lg font-semibold ">R${joia.price}</p>
              </div>
              <p>{joia.description}</p>
              <AddToCartBtn
                id={joia._id}
                name={joia.name}
                currency="BRL"
                description={joia.description}
                images={joia.images}
                price={joia.price}
                text="Adicionar ao Carrinho"
                btnStyles="btn btn-accent"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <PackageCheck size={20} className="text-accent" />
                <p>Entrega Gratis em pedidos apartir de R$300</p>
              </div>
              <div className="flex gap-2">
                <RefreshCw size={20} className="text-accent" />
                <p>Devolução Grátis em 30 dias</p>
              </div>
              <div className="flex gap-2">
                <AlertTriangle size={20} className="text-accent" />
                <p>Joias embaladas com todo cuidado e proteção.</p>
              </div>
              <div className="flex gap-2">
                <Clock size={20} className="text-accent" />
                <p>Entrega Rápida.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
