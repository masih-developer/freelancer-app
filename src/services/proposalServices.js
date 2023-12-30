import mainRequest from ".";

export const changeProposalStatusApi = async ({ id, proposal }) => {
  const { data } = await mainRequest.patch(`/proposal/${id}`, proposal);
  return data.data;
};
