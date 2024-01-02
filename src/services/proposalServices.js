import mainRequest from ".";

export const changeProposalStatusApi = async ({ id, proposal }) => {
  const { data } = await mainRequest.patch(`/proposal/${id}`, proposal);
  return data.data;
};

export const getProposalsApi = async () => {
  const { data } = await mainRequest.get("/proposal/list");
  return data.data;
};
