import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { apiService } from "../service/apiService";

export const usePostNewOrder = () => {
  const { mutate, data, error, ...rest } = useMutation<
    AxiosResponse<any>,
    AxiosError<{ message?: string }>,
    {
      body: {
        cliente: number;
        itens: {
          produto: {
            id: number;
          };
          quantidade: number;
        };
      };
    }
  >({
    mutationFn: apiService.postNewOrder,
  });

  return {
    postNewOrder: mutate,
    postNewOrderData: data,
    postNewOrderErrorMessage: error?.response?.data.message,
    postNewOrderRest: rest,
  };
};
