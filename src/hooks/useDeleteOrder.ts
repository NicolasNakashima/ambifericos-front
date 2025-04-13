import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { apiService } from "../service/apiService";

export function useDeleteOrder() {
  const { mutate, data, error, ...rest } = useMutation<
    AxiosResponse<any>,
    AxiosError<{ message: string }>,
    { id: number }
  >({
    mutationFn: apiService.deleteOrder,
  });

  return {
    deleteOrder: mutate,
    deleteOrderResponse: data?.data,
    deleteOrderError: error?.response?.data,
    deleteOrderRest: rest,
  };
}
