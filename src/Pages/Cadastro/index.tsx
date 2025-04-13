/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import * as S from "./styles";
import { RegisterModal, IRegisterProps } from "../../components/SignUpModal";
import { useSnackbar } from "notistack";
import { Loading } from "../../components/Loading";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleRegister = async (values: IRegisterProps) => {
    setIsLoading(true);

    try {
      console.log("Cadastro enviado:", values);
      enqueueSnackbar("Cadastro realizado com sucesso!", {
        variant: "success",
        autoHideDuration: 2000,
      });
    } catch (error) {
      enqueueSnackbar("Erro ao realizar cadastro.", {
        variant: "error",
        autoHideDuration: 2000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <RegisterModal handleSubmit={handleRegister} />
        </S.Container>
      </S.Wrapper>
      <Loading isLoading={isLoading} fullScreen={true} />
    </>
  );
};
