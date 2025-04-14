import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button } from "@mui/material";
import * as S from "./style";

interface IProductCardCart {
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  isOrderCard?: boolean;
  onClick: () => void;
  onDelete: () => void;
  onSetQuantity: (quantity: number) => void;
}

export default function ProductCardCart({
  description,
  image,
  name,
  price,
  quantity,
  isOrderCard,
  onClick,
  onDelete,
  onSetQuantity,
}: IProductCardCart) {
  return (
    <S.Card>
      <S.ImageCard
        src={image}
        onClick={() => onClick()}
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement;
          target.src =
            "https://i.pinimg.com/474x/f9/86/a1/f986a135681281d4cd0deb6e4ec351fc.jpg";
        }}
      />
      <S.InfoAndAction>
        <S.CardInformations onClick={() => onClick()}>
          <S.ProductName>{name}</S.ProductName>
          <S.ProductPrice>R$ {price}</S.ProductPrice>
          <S.ProductDescription>{description}</S.ProductDescription>
        </S.CardInformations>
        {!isOrderCard && (
          <S.counterAndButton>
            <S.styledCounter>
              <Button
                aria-label="reduce"
                onClick={() => onSetQuantity(Math.max(quantity - 1, 0))}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <S.counterTitle>{quantity}</S.counterTitle>
              <Button
                aria-label="increase"
                onClick={() => onSetQuantity(quantity + 1)}
              >
                <AddIcon fontSize="small" />
              </Button>
            </S.styledCounter>
            <Button onClick={() => onDelete()}>
              <DeleteIcon fontSize="large" color="error" />
            </Button>
          </S.counterAndButton>
        )}
      </S.InfoAndAction>
    </S.Card>
  );
}
