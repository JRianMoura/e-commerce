"use client";

import { urlFor } from "../app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { CgEye, CgShoppingBag } from "react-icons/cg";

const Joia = ({ joia }) => {
  const popularJoias = joia.categories.find((joia) => joia.name === "anel");
  console.log(popularJoias);
  return <div>joias</div>;
};

export default Joia;
