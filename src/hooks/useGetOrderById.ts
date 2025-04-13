import { AxiosError, AxiosResponse } from "axios";
import { apiService } from "../service/apiService";
import { useQuery } from "@tanstack/react-query";

export const useGetOrderById = ({
  id,
  enabled,
}: {
  id: number;
  enabled?: boolean;
}) => {
  const { refetch, data, error, ...rest } = useQuery<
    AxiosResponse<any>,
    AxiosError<{ message?: string }>
  >({
    queryKey: ["/ambifericos/pedido/listarPedidoPeloId", id],
    queryFn: () => apiService.getOrderById({ id }),
    enabled,
  });

  return {
    getOrderById: refetch,
    getOrderByIdData: data,
    getOrderByIdErrorMessage: error?.response?.data.message,
    getOrderByIdRest: rest,
  };
};
