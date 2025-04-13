import { AxiosError, AxiosResponse } from "axios";
import { apiService } from "../service/apiService";
import { useQuery } from "@tanstack/react-query";

export const useGetOrdersByClient = ({
  clientid,
  enabled,
}: {
  clientid: number;
  enabled?: boolean;
}) => {
  const { refetch, data, error, ...rest } = useQuery<
    AxiosResponse<any>,
    AxiosError<{ message?: string }>
  >({
    queryKey: ["/ambifericos/pedido/listarPedidosPeloCliente", clientid],
    queryFn: () => apiService.getOrdersByClient({ id: clientid }),
    enabled,
  });

  return {
    getOrdersByClient: refetch,
    getOrdersByClientData: data,
    getOrdersByClientErrorMessage: error?.response?.data.message,
    getOrdersByClientRest: rest,
  };
};
