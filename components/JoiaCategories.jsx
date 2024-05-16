"use client";
import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import Joia from "./Joia";

const JoiaCategories = ({ joias }) => {
  const [category, setCategory] = useState("all");
  const [filteredJoias, setFilteredJoias] = useState([]);
  const [price, setPrice] = useState(2400);

  useEffect(() => {
    const filtered = joias.filter((joia) => {
      const categoryMatch =
        category === "all"
          ? joias
          : joia.categories.some((categ) => categ.name === category);
      const priceMatch = joia.price <= price;
      return categoryMatch && priceMatch;
    });
    setFilteredJoias(filtered);
  }, [category, price, joias]);

  return (
    <section className="min-h-[1200px] py-10">
      <div className="container mx-auto">
        <div className="flex flex-col">
          {/*Barra Lateral */}
          <aside className="w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed">
            <RadioGroup
              defaultValue="all"
              className="flex flex-col gap-6 mb-12"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="all"
                  id="all"
                  onClick={() => setCategory("all")}
                />
                <label htmlFor="all">All</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="tornozeleira"
                  id="tornozeleira"
                  onClick={() => setCategory("tornozeleira")}
                />
                <label htmlFor="tornozeleira">Tornozeleira</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="ouro"
                  id="ouro"
                  onClick={() => setCategory("ouro")}
                />
                <label htmlFor="ouro">Ouro</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="prata"
                  id="prata"
                  onClick={() => setCategory("prata")}
                />
                <label htmlFor="prata">Prata</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="pulseira"
                  id="pulseira"
                  onClick={() => setCategory("pulseira")}
                />
                <label htmlFor="pulseira">Pulseira</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="colar"
                  id="colar"
                  onClick={() => setCategory("colar")}
                />
                <label htmlFor="colar">Colar</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="anel"
                  id="anel"
                  onClick={() => setCategory("anel")}
                />
                <label htmlFor="anel">Anel</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="brinco"
                  id="brinco"
                  onClick={() => setCategory("brinco")}
                />
                <label htmlFor="brinco">Brinco</label>
              </div>
            </RadioGroup>
            <div className="max-w-60">
              <div className="text-lg mb-4 font-medium">
                Preço Máximo:{" "}
                <span className="text-accent font-semibold ml-2">
                  R${price}
                </span>
                <span className="ml-2">
                  (
                  {filteredJoias.length > 1
                    ? `${filteredJoias.length} itens`
                    : filteredJoias === 0
                    ? `${filteredJoias.length} itens`
                    : `${filteredJoias.length} item`}
                  )
                </span>
              </div>
              <Slider
                defaultValue={[2400]}
                max={2500}
                step={1}
                onValueChange={(val) => setPrice(val[0])}
              />
            </div>
          </aside>
          {/*lista de bikes */}
          <div className="w-full xl:w-[1050px] ml-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
              {filteredJoias.map((joia) => {
                return <Joia joia={joia} key={joia.price_id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoiaCategories;
