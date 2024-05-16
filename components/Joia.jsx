"use client";
import AddToCartBtn from "./AddToCartBtn";

import { urlFor } from "../app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { CgEye, CgShoppingBag } from "react-icons/cg";

const Joia = ({ joia }) => {
  const popularJoias = joia.categories.find((joia) => joia.name === "anel");
  return (
    <div className="group">
      <div className="border h-[328px] mb-5 p-4 overflow-hidden relative">
        <div className="bg-white/5 w-full h-full group-hover:bg-white/10 transition-all duration-300 flex justify-center items-center">
          {popularJoias && (
            <div className="absolute top-8 left-8 bg-accent text-white px-3 text-sm uppercase font-medium">
              Popular
            </div>
          )}
          <Image
            src={urlFor(joia.images[0]).url()}
            width={240}
            height={147}
            alt=""
          />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300">
          <AddToCartBtn
            id={joia._id}
            name={joia.name}
            currency="BRL"
            description={joia.description}
            images={joia.images}
            price={joia.price}
            btnStyles="btn-icon btn-accent"
            icon={<CgShoppingBag />}
          />
          <Link href={`/produtos/${joia.slug}`}>
            <button className="btn-icon btn-primary">
              <CgEye />
            </button>
          </Link>
        </div>
      </div>
      <h5 className="text-gray-400 font-semibold mb-2">
        {joia.categories[1].name}
      </h5>
      <h4 className="mb-1">{joia.name}</h4>
      <div className="text-lg font-bold text-accent">R${joia.price}</div>
    </div>
  );
};

export default Joia;
