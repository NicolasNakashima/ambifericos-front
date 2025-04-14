import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { apiService } from "../service/apiService";
import { IPostNewOrderProps } from "../types/io";

export const usePostNewOrder = () => {
  const { mutate, data, error, ...rest } = useMutation<
    AxiosResponse<any>,
    AxiosError,
    IPostNewOrderProps
  >({
    mutationFn: apiService.postNewOrder,
  });

  return {
    postNewOrder: mutate,
    postNewOrderData: data,
    postNewOrderErrorMessage: error?.response?.data,
    postNewOrderRest: rest,
  };
};
