import { useQuery } from "@tanstack/react-query";
import { getProposalsApi } from "../../services/proposalServices";

const useProposals = () => {
  const { data, ...rest } = useQuery({
    queryKey: ["proposals"],
    queryFn: getProposalsApi,
  });

  const { proposals } = data || {};

  return { proposals, ...rest };
};

export default useProposals;
