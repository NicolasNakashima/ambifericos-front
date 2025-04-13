import { AxiosError, AxiosResponse } from "axios";
import { apiService } from "../service/apiService";
import { useQuery } from "@tanstack/react-query";

export const useGetProducts = ({ enabled }: { enabled?: boolean }) => {
  const { refetch, data, error, ...rest } = useQuery<
    AxiosResponse<any>,
    AxiosError<{ message?: string }>
  >({
    queryKey: ["/ambifericos/produtos/buscarTodos"],
    queryFn: () => apiService.getProducts(),
    enabled,
  });

  return {
    getProducts: refetch,
    getProductsData: data,
    getProductsErrorMessage: error?.response?.data.message,
    getProductsRest: rest,
  };
};
