import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-40 px-20 md:py-10 md:h-[790px] relative overflow-hidden bg-white border-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="w-full xl:max-w-[580px] md:h-[620px] flex flex-col justify-center items-center">
            <h1 className="text-center xl:text-left mb-6">
              COMEÇE 2025 COM ESTILO
            </h1>
            <p className="mb-10 text-lg max-w-[508px] mx-auto text-center xl:text-left xl:mx-0">
              Todo recomeço mereçe um brilho único. As joias são desenhadas por
              Mari, feitas com matéria prima de ótima qualidade, com um time
              dedicado que harmoniza formas e estética perfeita...
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 mx-auto xl:mx-0">
              <Link href={"/nossas-joias"} className="mx-auto md:mx-0">
                <button className="btn btn-primary">Comprar Agora</button>
              </Link>
              <Link href={"/nossas-joias"} className="mx-auto md:mx-0">
                <button className="btn btn-accent">Nossas Joias</button>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex">
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
