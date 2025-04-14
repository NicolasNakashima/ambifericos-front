import { AxiosError, AxiosResponse } from "axios";
import { apiService } from "../service/apiService";
import { useQuery } from "@tanstack/react-query";
import { IUserResponse } from "../types/io";

export const useGetClients = ({ enabled }: { enabled?: boolean }) => {
    const { refetch, data, error, ...rest } = useQuery<
        AxiosResponse<IUserResponse[]>,
        AxiosError<{ message?: string }>
    >({
        queryKey: ["/ambifericos/cliente/listarTudo"],
        queryFn: () => apiService.getClients(),
        enabled,
    });

    return {
        getClients: refetch,
        getClientsData: data,
        getClientsErrorMessage: error?.response?.data.message,
        getClientsRest: rest,
    };
};
