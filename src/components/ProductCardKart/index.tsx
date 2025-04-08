import { Button, ButtonGroup } from "@mui/material";
import * as S from "./style";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

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
  const [count, setCount] = useState(1);

  return (
    <S.Card onClick={() => onClick({ pk_id })}>
      <S.ImageCard src={image} />
      <S.InfoAndAction>
        <S.CardInformations>
          <S.ProductName>{name}</S.ProductName>
          <S.ProductPrice>R$ {price}</S.ProductPrice>
          <S.ProductDescription>{description}</S.ProductDescription>
        </S.CardInformations>
        <S.counterAndButton>
          <S.styledCounter>
            <Button
              aria-label="reduce"
              onClick={() => {
                setCount(Math.max(count - 1, 0));
              }}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <S.counterTitle>{count}</S.counterTitle>
            <Button
              aria-label="increase"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <AddIcon fontSize="small" />
            </Button>
          </S.styledCounter>
          <DeleteIcon fontSize="large" color="error" />
        </S.counterAndButton>
      </S.InfoAndAction>
    </S.Card>
  );
}
