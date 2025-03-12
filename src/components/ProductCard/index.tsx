import * as S from "./style";

interface IProductCard {
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function ProductCard({
  description,
  image,
  name,
  price,
}: IProductCard) {
  return (
    <S.Card>
      <S.ImageCard src={image} />
      <S.CardInformations>
        <S.ProductName>{name}</S.ProductName>
        <S.ProductPrice>R$ {price}</S.ProductPrice>
        <S.ProductDescription>{description}</S.ProductDescription>
      </S.CardInformations>
    </S.Card>
  );
}
