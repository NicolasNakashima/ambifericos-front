import { IconButton } from "@mui/material";
import * as S from "./styles";
import DeleteIcon from "@mui/icons-material/Delete";

interface IAdminListing {
  pk_id: number;
  name: string;
  image?: string;
  onDelete: (data: { pk_id: number }) => void;
}

export const AdminListing = ({
  pk_id,
  name,
  image,
  onDelete,
}: IAdminListing) => {
  return (
    <S.Wrapper>
      <S.AvatarAndName>
        <S.SyledAvatar
          src={
            image ||
            "https://adimax.com.br/wp-content/uploads/2022/05/cuidados-filhote-de-cachorro.jpg"
          }
        />
        <S.StyledName>{name}</S.StyledName>
      </S.AvatarAndName>
      <IconButton onClick={() => onDelete({ pk_id: pk_id })}>
        <DeleteIcon color="error" />
      </IconButton>
    </S.Wrapper>
  );
};
