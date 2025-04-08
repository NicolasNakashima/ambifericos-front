import * as S from "./style";
import DeleteIcon from "@mui/icons-material/Delete";

interface IProductCardKart {
  pk_id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  onClick: (data: { pk_id: number }) => void;
}

export default function ProductCardKart({
  pk_id,
  description,
  image,
  name,
  price,
  onClick,
}: IProductCardKart) {
  return (
    <S.Card onClick={() => onClick({ pk_id })}>
      <S.ImageCard src={image} />
      <S.InfoAndAction>
        <S.CardInformations>
          <S.ProductName>{name}</S.ProductName>
          <S.ProductPrice>R$ {price}</S.ProductPrice>
          <S.ProductDescription>{description}</S.ProductDescription>
        </S.CardInformations>
        <DeleteIcon fontSize="large" color="error" />
      </S.InfoAndAction>
    </S.Card>
  );
}
