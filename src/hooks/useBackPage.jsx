import { useNavigate } from "react-router-dom";

const useBackPage = () => {
  const navigate = useNavigate();
  return () => navigate(-1);
};

export default useBackPage;
