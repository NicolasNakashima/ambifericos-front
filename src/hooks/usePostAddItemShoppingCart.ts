import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { apiService } from "../service/apiService";
import { IPostAddItemShoppingCartProps } from "../types/io";

export const usePostAddItemShoppingCart = () => {
  const { mutate, data, error, ...rest } = useMutation<
    AxiosResponse<any>,
    AxiosError,
    IPostAddItemShoppingCartProps
  >({
    mutationFn: apiService.postAddItemShoppingCart,
  });

  return {
    postAddItemShoppingCart: mutate,
    postAddItemShoppingCartData: data?.data,
    postAddItemShoppingCartErrorMessage: error?.response?.data,
    postAddItemShoppingCartRest: rest,
  };
};
