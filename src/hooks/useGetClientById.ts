import { AxiosError, AxiosResponse } from "axios";
import { apiService } from "../service/apiService";
import { useQuery } from "@tanstack/react-query";

export const useGetClientById = ({
  clientId,
  enabled,
}: {
  clientId: number;
  enabled?: boolean;
}) => {
  const { refetch, data, error, ...rest } = useQuery<
    AxiosResponse<any>,
    AxiosError<{ message?: string }>
  >({
    queryKey: ["/ambifericos/cliente/listarPeloId", clientId],
    queryFn: () => apiService.getClientById({ id: clientId }),
    enabled,
  });

  return {
    getClientById: refetch,
    getClientByIdData: data,
    getClientByIdErrorMessage: error?.response?.data.message,
    getClientByIdRest: rest,
  };
};
