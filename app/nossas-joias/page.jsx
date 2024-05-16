import JoiaCategories from "../../components/JoiaCategories";
import { client } from "./../lib/sanity";

const getData = async () => {
  const query = `*[_type == 'product']{
    _id,
    images,
    price,
    price_id,
    name,
    description,
    "slug": slug.current,
    "categories": categories[] -> {name}
  }`;
  const data = await client.fetch(query);
  return data;
};

const NossasJoias = async () => {
  const joias = await getData();
  return (
    <div>
      <JoiaCategories joias={joias} />
    </div>
  );
};

export default NossasJoias;
