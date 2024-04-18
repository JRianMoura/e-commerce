import Link from "next/link";
import Nav from "./Nav";
import CartSidebar from "./CartSidebar";
import { CgShoppingBag } from "react-icons/cg";

const Header = () => {
  return (
    <div className="bg-white shadow-lg sticky top-0 py-8 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"} className="hover:text-current">
          <h1 className="text-[26px]">
            <span className="text-accent">B</span>atistussi &nbsp;
            <span className="text-accent">B</span>eauty
          </h1>
        </Link>
        <div className="flex items-center gap-[26px]">
          <Nav />
          <div className="relative cursor-pointer">
            <CgShoppingBag className="text-[26px]" />
            <div className="bg-accent w-[18px] h-[18px] absolute -right-1 -bottom-1 rounded-full text-white flex items-center justify-center text-sm font-medium">
              3
            </div>
          </div>
          <CartSidebar />
        </div>
      </div>
    </div>
  );
};

export default Header;
