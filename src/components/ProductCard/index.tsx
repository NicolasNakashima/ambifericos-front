import * as S from "./style";

interface IProductCard {
  pk_id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  onClick: (data: { pk_id: number }) => void;
}

export default function ProductCard({
  pk_id,
  description,
  image,
  name,
  price,
  onClick,
}: IProductCard) {
  return (
    <S.Card onClick={() => onClick({ pk_id })}>
      <S.ImageCard src={image} />
      <S.CardInformations>
        <S.ProductName>{name}</S.ProductName>
        <S.ProductPrice>R$ {price}</S.ProductPrice>
        <S.ProductDescription>{description}</S.ProductDescription>
      </S.CardInformations>
    </S.Card>
  );
}
