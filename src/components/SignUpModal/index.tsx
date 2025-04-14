import { useState } from "react";
import * as S from "./styles";

export interface IRegisterProps {
  name: string;
  email: string;
  password: string;
}

export interface IDataProps {
  handleSubmit: (values: IRegisterProps) => void;
}

const RegisterModal = ({ handleSubmit }: IDataProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid =
    name.trim() !== "" && email.trim() !== "" && password.trim() !== "";

  return (
    <S.Wrapper>
      <S.StyledTitle>Ambiféricos - Cadastro</S.StyledTitle>

      <S.TextFieldStyled
        label="Digite seu nome"
        variant="standard"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <S.TextFieldStyled
        label="Digite seu email"
        variant="standard"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <S.TextFieldStyled
        label="Digite sua senha"
        variant="standard"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <S.ButtonStyled
        color="inherit"
        disabled={!isFormValid}
        onClick={() => handleSubmit({ name, email, password })}
      >
        Cadastrar
      </S.ButtonStyled>
    </S.Wrapper>
  );
};

export { RegisterModal };
