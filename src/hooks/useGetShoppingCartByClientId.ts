import { AxiosError, AxiosResponse } from "axios";
import { apiService } from "../service/apiService";
import { useQuery } from "@tanstack/react-query";
import { IGetProductsShoppingCartData } from "../types/io";

export const useGetShoppingCartByClientId = ({
  clientId,
  enabled,
}: {
  clientId: number;
  enabled?: boolean;
}) => {
  const { refetch, data, error, ...rest } = useQuery<
    AxiosResponse<IGetProductsShoppingCartData[]>,
    AxiosError
  >({
    queryKey: ["/ambifericos/carrinho/listarPorCliente", clientId],
    queryFn: () => apiService.getShoppingCartByClientId(clientId),
    enabled,
  });

  return {
    getShoppingCartByClientId: refetch,
    getShoppingCartByClientIdData: data?.data,
    getShoppingCartByClientIdErrorMessage: error,
    getShoppingCartByClientIdRest: rest,
  };
};
