import { IconButton } from "@mui/material";
import * as S from "./styles";
import DeleteIcon from "@mui/icons-material/Delete";

interface IProductListComp {
  pk_id: number;
  name: string;
  image: string;
  onDelete: (data: { pk_id: number }) => void;
}

export const ProductListComp = ({
  pk_id,
  name,
  image,
  onDelete,
}: IProductListComp) => {
  return (
    <S.Wrapper>
      <S.AvatarAndName>
        <S.SyledAvatar src={image} />
        <S.StyledName>{name}</S.StyledName>
      </S.AvatarAndName>
      <IconButton onClick={() => onDelete({ pk_id: pk_id })}>
        <DeleteIcon color="error" />
      </IconButton>
    </S.Wrapper>
  );
};
