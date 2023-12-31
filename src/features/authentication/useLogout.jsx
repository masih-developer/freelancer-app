import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutApi } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: userLogouting, isPending: isLogouting } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success("با موفقیت از حساب کاربری خود خارج شدید.");
      queryClient.removeQueries();
      navigate("/auth", { replace: true });
    },
  });

  return { userLogouting, isLogouting };
};

export default useLogout;
