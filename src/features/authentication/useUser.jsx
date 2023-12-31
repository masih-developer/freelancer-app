import { useQuery } from "@tanstack/react-query";
import { getUserApi } from "../../services/authService";

const useUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUserApi,
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { user } = data || {};

  return { user, isLoading };
};

export default useUser;
