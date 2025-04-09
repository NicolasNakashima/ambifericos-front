import { AxiosError, AxiosResponse } from "axios";
import { apiService } from "../service/apiService";
import { useQuery } from "@tanstack/react-query";

export const useGetOrders = ({ enabled }: { enabled?: boolean }) => {
  const { refetch, data, error, ...rest } = useQuery<
    AxiosResponse<any>,
    AxiosError<{ message?: string }>
  >({
    queryKey: ["/ambifericos/pedido/listarPedidos"],
    queryFn: () => apiService.getOrders(),
    enabled,
  });

  return {
    getOrders: refetch,
    getOrdersData: data,
    getOrdersErrorMessage: error?.response?.data.message,
    getOrdersRest: rest,
  };
};
