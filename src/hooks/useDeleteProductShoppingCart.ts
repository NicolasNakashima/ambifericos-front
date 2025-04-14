import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { apiService } from "../service/apiService";

export function useDeleteProductShoppingCart() {
  const { mutate, data, error, ...rest } = useMutation<
    AxiosResponse<any>,
    AxiosError<{ message: string }>,
    { itemId: number }
  >({
    mutationFn: apiService.deleteProductShoppingCart,
  });

  return {
    deleteProductShoppingCart: mutate,
    deleteProductShoppingCartResponse: data?.data,
    deleteProductShoppingCartError: error?.response?.data,
    deleteProductShoppingCartRest: rest,
  };
}
