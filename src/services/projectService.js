import mainRequest from ".";

export const getOwnerProjectsApi = async () => {
  const { data } = await mainRequest.get("/project/owner-projects");
  return data.data;
};

export const removeProjectApi = async (id) => {
  const { data } = await mainRequest.delete(`/project/${id}`);
  return data.data;
};
