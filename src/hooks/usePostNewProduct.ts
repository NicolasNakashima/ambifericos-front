import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { apiService } from "../service/apiService";

export const usePostNewProduct = () => {
  const { mutate, data, error, ...rest } = useMutation<
    AxiosResponse<any>,
    AxiosError<{ message?: string }>,
    {
      eventId: number;
      body: {
        nome: string;
        descricao: string;
        preco: number;
        estoque: number;
        imagem: string;
      };
    }
  >({
    mutationFn: apiService.postNewProduct,
  });

  return {
    postNewProduct: mutate,
    postNewProductData: data?.data,
    postNewProductErrorMessage: error?.response?.data.message,
    postNewProductRest: rest,
  };
};
