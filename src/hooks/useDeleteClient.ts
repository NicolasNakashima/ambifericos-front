import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { apiService } from "../service/apiService";

export function useDeleteClient() {
  const { mutate, data, error, ...rest } = useMutation<
    AxiosResponse<any>,
    AxiosError<{ message: string }>,
    { id: number }
  >({
    mutationFn: apiService.deleteClient,
  });

  return {
    deleteClient: mutate,
    deleteClientResponse: data?.data,
    deleteClientError: error?.response?.data,
    deleteClientRest: rest,
  };
}
