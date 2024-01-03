import mainRequest from ".";

export const changeProposalStatusApi = ({ proposalId, ...data }) => {
  return mainRequest
    .patch(`/proposal/${proposalId}`, data)
    .then(({ data }) => data.data);
};

export const getProposalsApi = async () => {
  const { data } = await mainRequest.get("/proposal/list");
  return data.data;
};

export const createProposalApi = async (proposal) => {
  const { data } = await mainRequest.post("/proposal/add", proposal);
  return data.data;
};
