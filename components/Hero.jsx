import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-48 px-20 md:py-0 md:h-[820px] relative overflow-hidden bg-white border-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="w-full xl:max-w-[580px] md:h-[820px] flex flex-col justify-center items-start">
            text
          </div>
          <div className="hidden xl:flex ">
            <Image
              src="/hero/joia.webp"
              width={600}
              height={200}
              alt=""
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
