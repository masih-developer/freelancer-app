import { useQuery } from "@tanstack/react-query";
import { getUserApi } from "../../services/authService";

const useUser = () => {
    return useQuery({
        queryKey: ["user-profile"],
        queryFn: getUserApi,
        retry: false,
        refetchOnWindowFocus: true,
    });
};

export default useUser;
