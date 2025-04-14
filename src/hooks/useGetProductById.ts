import { AxiosError, AxiosResponse } from "axios";
import { apiService } from "../service/apiService";
import { useQuery } from "@tanstack/react-query";
import { IGetProductsData } from "../types/io";

export const useGetProductById = ({
  productId,
  enabled,
}: {
  productId: number;
  enabled?: boolean;
}) => {
  const { refetch, data, error, ...rest } = useQuery<
    AxiosResponse<IGetProductsData>,
    AxiosError
  >({
    queryKey: ["/ambifericos/produtos/buscarPorID", productId],
    queryFn: () => apiService.getProductById({ id: productId }),
    enabled,
  });

  return {
    getProductById: refetch,
    getProductByIdData: data?.data,
    getProductByIdErrorMessage: error?.response?.data,
    getProductByIdRest: rest,
  };
};
