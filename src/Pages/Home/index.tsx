import ProductCard from "../../components/ProductCard";
import * as S from "./styles";

export const Home = () => {
  const mockData = Array.from({ length: 6 }, (_, i) => ({
    pk_id: i + 1,
    name: `Ambi ${i + 1}`,
    price: 2 * i,
    description: `esse é o ambiduwille ${i + 1}`,
    image:
      "https://i.pinimg.com/736x/13/2c/ca/132ccab00cbe2774aa975c147c584aa8.jpg",
  }));

  return (
    <S.Wrapper>
      <S.RecomendedContainer>
        {mockData?.map((peripheral) => (
          <ProductCard
            pk_id={peripheral?.pk_id}
            name={peripheral?.name}
            description={peripheral?.description}
            price={peripheral?.price}
            image={peripheral?.image}
            onClick={(data) => console.log("data: ", data)}
          />
        ))}
      </S.RecomendedContainer>
    </S.Wrapper>
  );
};
