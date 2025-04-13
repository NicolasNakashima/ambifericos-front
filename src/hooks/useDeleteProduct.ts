import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { apiService } from "../service/apiService";

export function useDeleteProduct() {
  const { mutate, data, error, ...rest } = useMutation<
    AxiosResponse<any>,
    AxiosError<{ message: string }>,
    { id: number }
  >({
    mutationFn: apiService.deleteProduct,
  });

  return {
    deleteProduct: mutate,
    deleteProductResponse: data?.data,
    deleteProductError: error?.response?.data,
    deleteProductRest: rest,
  };
}
