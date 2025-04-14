import { useState } from "react";
import * as S from "./styles";

export interface ILoginProps {
  email: string;
  password: string;
}
export interface IDataProps {
  handleSubmit: (values: ILoginProps) => void;
}

const LoginModal = ({ handleSubmit }: IDataProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <S.Wrapper>
      <S.StyledTitle>Ambiféricos - Login</S.StyledTitle>
      <S.TextFieldStyled
        label="Digite seu email"
        variant="standard"
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.TextFieldStyled
        label="Digite sua senha"
        variant="standard"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <S.ButtonStyled
        color="inherit"
        onClick={() => {
          handleSubmit({ email, password });
        }}
      >
        Login
      </S.ButtonStyled>
    </S.Wrapper>
  );
};

export { LoginModal };
