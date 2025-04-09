import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { apiService } from "../service/apiService";

export function useDeleteAdmin() {
  const { mutate, data, error, ...rest } = useMutation<
    AxiosResponse<any>,
    AxiosError<{ message: string }>,
    { id: number }
  >({
    mutationFn: apiService.deleteAdmin,
  });

  return {
    deleteAdmin: mutate,
    deleteAdminResponse: data?.data,
    deleteAdminError: error?.response?.data,
    deleteAdminRest: rest,
  };
}
