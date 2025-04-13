import { AxiosError, AxiosResponse } from "axios";
import { apiService } from "../service/apiService";
import { useQuery } from "@tanstack/react-query";

export const useGetAdminById = ({
  adminId,
  enabled,
}: {
  adminId: number;
  enabled?: boolean;
}) => {
  const { refetch, data, error, ...rest } = useQuery<
    AxiosResponse<any>,
    AxiosError<{ message?: string }>
  >({
    queryKey: ["/ambifericos/adminstrador/selecionarPorId", adminId],
    queryFn: () => apiService.getAdminById({ id: adminId }),
    enabled,
  });

  return {
    getAdminById: refetch,
    getAdminByIdData: data,
    getAdminByIdErrorMessage: error?.response?.data.message,
    getAdminByIdRest: rest,
  };
};
