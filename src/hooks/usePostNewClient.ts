import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { apiService } from "../service/apiService";

export const usePostNewClient = () => {
    const { mutate, data, error, ...rest } = useMutation<
        AxiosResponse<any>,
        AxiosError<{ message?: string }>,
        {
            body: {
                nome: string;
                email: string;
                senha: string;
                endereco: string;
                adm: boolean;
            };
        }
    >({
        mutationFn: apiService.postNewClient,
    });

    return {
        postNewClient: mutate,
        postNewClientData: data?.data,
        postNewClientErrorMessage: error?.response?.data.message,
        postNewClientRest: rest,
    };
};
