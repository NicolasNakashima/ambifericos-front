import { AxiosError, AxiosResponse } from "axios";
import { apiService } from "../service/apiService";
import { useQuery } from "@tanstack/react-query";
import { IGetOrdersData } from "../types/io";

export const useGetOrdersByClient = ({
  clientid,
  enabled,
}: {
  clientid: number;
  enabled?: boolean;
}) => {
  const { refetch, data, error, ...rest } = useQuery<
    AxiosResponse<IGetOrdersData[]>,
    AxiosError
  >({
    queryKey: ["/ambifericos/pedido/listarPedidosPeloCliente", clientid],
    queryFn: () => apiService.getOrdersByClient({ id: clientid }),
    enabled,
  });

  return {
    getOrdersByClient: refetch,
    getOrdersByClientData: data?.data,
    getOrdersByClientErrorMessage: error?.response?.data,
    getOrdersByClientRest: rest,
  };
};
