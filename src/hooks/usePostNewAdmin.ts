import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { apiService } from "../service/apiService";

export const usePostNewAdmin = () => {
    const { mutate, data, error, ...rest } = useMutation<
        AxiosResponse<any>,
        AxiosError<{ message?: string }>,
        {
            body: {
                nome: string;
                email: string;
                senha: string;
            };
        }
    >({
        mutationFn: apiService.postNewAdmin,
    });

    return {
        postNewAdmin: mutate,
        postNewAdminData: data?.data,
        postNewAdminErrorMessage: error?.response?.data.message,
        postNewAdminRest: rest,
    };
};
