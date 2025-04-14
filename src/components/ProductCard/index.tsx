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
      <S.ImageCard
        src={image}
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement;
          target.src =
            "https://i.pinimg.com/474x/f9/86/a1/f986a135681281d4cd0deb6e4ec351fc.jpg";
        }}
      />
      <S.CardInformations>
        <S.ProductName>{name}</S.ProductName>
        <S.ProductPrice>R$ {price}</S.ProductPrice>
        <S.ProductDescription>{description}</S.ProductDescription>
      </S.CardInformations>
    </S.Card>
  );
}
