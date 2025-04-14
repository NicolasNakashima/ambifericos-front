/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import * as S from "./styles";
import { RegisterModal, IRegisterProps } from "../../components/SignUpModal";
import { useSnackbar } from "notistack";
import { Loading } from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import { usePostNewClient } from "../../hooks/usePostNewClient";

export const Cadastro = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const { postNewClient, postNewClientData, postNewClientErrorMessage } =
    usePostNewClient();

  const handleRegister = async (values: IRegisterProps) => {
    setIsLoading(true);

    postNewClient({
      body: {
        nome: values.name,
        email: values.email,
        senha: values.password,
        endereco: values.address,
        adm: false,
      },
    });
  };

  useEffect(() => {
    if (postNewClientData) {
      enqueueSnackbar("Cadastro realizado com sucesso!", {
        variant: "success",
        autoHideDuration: 2000,
      });
      navigate("/");
    }
  }, [postNewClientData]);

  useEffect(() => {
    if (postNewClientErrorMessage) {
      enqueueSnackbar(String(postNewClientErrorMessage), {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  }, [postNewClientErrorMessage]);

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
