import { AxiosError, AxiosResponse } from "axios";
import { apiService } from "../service/apiService";
import { useQuery } from "@tanstack/react-query";
import { IUserResponse } from "../types/io";

export const useGetClientByEmailAndPassword = ({
  clientEmail,
  clientPassword,
  enabled,
}: {
  clientEmail: string;
  clientPassword: string;
  enabled?: boolean;
}) => {
  const { refetch, data, error, ...rest } = useQuery<
    AxiosResponse<IUserResponse>,
    AxiosError
  >({
    queryKey: [
      "/ambifericos/cliente/listarClientePeloEmailSenha",
      clientEmail,
      clientPassword,
    ],
    queryFn: () =>
      apiService.getClientByEmailAndPassword({
        email: clientEmail,
        senha: clientPassword,
      }),
    enabled,
  });

  return {
    getClientByEmailAndPassword: refetch,
    getClientByEmailAndPasswordData: data?.data,
    getClientByEmailAndPasswordErrorMessage: error?.response?.data,
    getClientByEmailAndPasswordRest: rest,
  };
};
