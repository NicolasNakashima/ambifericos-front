import { AxiosError, AxiosResponse } from "axios";
import { apiService } from "../service/apiService";
import { useQuery } from "@tanstack/react-query";

export const useGetAdmins = ({ enabled }: { enabled?: boolean }) => {
  const { refetch, data, error, ...rest } = useQuery<
    AxiosResponse<any>,
    AxiosError<{ message?: string }>
  >({
    queryKey: ["/ambifericos/adminstrador/selecionarTodos"],
    queryFn: () => apiService.getAdmins(),
    enabled,
  });

  return {
    getAdmins: refetch,
    getAdminsData: data,
    getAdminsErrorMessage: error?.response?.data.message,
    getAdminsRest: rest,
  };
};
