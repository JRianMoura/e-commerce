import Link from "next/link";
import { Input } from "./ui/input";
import {
  RiInstagramFill,
  RiPinterestFill,
  RiTwitterXFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="pt-12 xl:pt-24 bg-primary text-white text-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="capitalize leading-tight mb-2">
              Se inscreva na nossa Newsletter
            </h2>
            <p className="text-white/60">
              Para ser o primeiro a receber as mais recentes novidades sobre a
              moda, promoções e muito mais!
            </p>
          </div>
          <form className="flex flex-col xl:flex-row w-full max-w-[720px] mx-auto gap-5">
            <Input placeholder="Seu endereço de e-mail" />
            <button className="btn w-full xl:max-w-[150px] h-[60px] btn-accent rounded-md">
              Entrar
            </button>
          </form>
          <div className="flex gap-8 mx-auto text-[20px] text-white/60 mb-20">
            <Link href="">
              <RiInstagramFill />
            </Link>
            <Link href="">
              <RiTwitterXFill />
            </Link>
            <Link href="">
              <RiPinterestFill />
            </Link>
          </div>
        </div>
      </div>
      <div className="py-6 border-t border-white/5 text-white/60">
        Copyright &copy; 2025 Mari Jewelry. Todos os direitos reservados{" "}
        <a href="https://www.easyupbr.com">EASYUP</a>.
      </div>
    </footer>
  );
};

export default Footer;
