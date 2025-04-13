import { AxiosError, AxiosResponse } from "axios";
import { apiService } from "../service/apiService";
import { useQuery } from "@tanstack/react-query";

export const useGetProductById = ({
  productId,
  enabled,
}: {
  productId: number;
  enabled?: boolean;
}) => {
  const { refetch, data, error, ...rest } = useQuery<
    AxiosResponse<any>,
    AxiosError<{ message?: string }>
  >({
    queryKey: ["/ambifericos/produtos/buscarPorID", productId],
    queryFn: () => apiService.getProductById({ id: productId }),
    enabled,
  });

  return {
    getProductById: refetch,
    getProductByIdData: data,
    getProductByIdErrorMessage: error?.response?.data.message,
    getProductByIdRest: rest,
  };
};
