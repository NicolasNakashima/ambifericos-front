import ProductCard from "../../components/ProductCard";
import * as S from "./styles";

export const Home = () => {
  return (
    <S.Wrapper>
      <S.Container style={{ padding: "10rem" }}>
        <ProductCard
          name={"Ambi"}
          description={"Ambiduwile armani"}
          price={10}
          image={
            "https://i.pinimg.com/736x/13/2c/ca/132ccab00cbe2774aa975c147c584aa8.jpg"
          }
        />
      </S.Container>
    </S.Wrapper>
  );
};
