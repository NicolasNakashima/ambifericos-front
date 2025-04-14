/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import * as S from "./styles";
import { ILoginProps, LoginModal } from "../../components/LoginModal";
import { useSnackbar } from "notistack";
import { Loading } from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import { useGetClientByEmailAndPassword } from "../../hooks/useGetClientByEmailAndPassword";
import { useUser } from "../../contexts/AuthContext";

export const Login = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [userCredentials, setUserCredentials] = useState<{
    email: string;
    senha: string;
  } | null>(null);

  const {
    getClientByEmailAndPassword,
    getClientByEmailAndPasswordData,
    getClientByEmailAndPasswordErrorMessage,
    getClientByEmailAndPasswordRest,
  } = useGetClientByEmailAndPassword({
    clientEmail: userCredentials?.email ?? "",
    clientPassword: userCredentials?.senha ?? "",
    enabled: userCredentials
      ? userCredentials?.email?.length > 1 && userCredentials?.senha.length > 1
      : false,
  });

  function handleLogin(values: { email: string; password: string }) {
    if (values?.email.length > 0 && values.password.length > 0) {
      setUserCredentials({ email: values.email, senha: values.password });
    }
  }

  useEffect(() => {
    if (getClientByEmailAndPasswordData) {
      setUser(getClientByEmailAndPasswordData);
      navigate(`/`);
    }
  }, [getClientByEmailAndPasswordData]);

  useEffect(() => {
    if (getClientByEmailAndPasswordErrorMessage) {
      enqueueSnackbar(String(getClientByEmailAndPasswordErrorMessage), {
        variant: "error",
      });
    }
  }, [getClientByEmailAndPasswordErrorMessage]);

  useEffect(() => {
    if (userCredentials?.email?.length && userCredentials?.senha?.length)
      getClientByEmailAndPassword();
  }, [userCredentials]);

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <LoginModal handleSubmit={handleLogin} />
        </S.Container>
      </S.Wrapper>
      <Loading
        isLoading={getClientByEmailAndPasswordRest?.isLoading}
        fullScreen={true}
      />
    </>
  );
};
