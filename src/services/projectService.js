import mainRequest from ".";

export const getOwnerProjectsApi = async () => {
  const { data } = await mainRequest.get("/project/owner-projects");
  return data.data;
};

export const removeProjectApi = async (id) => {
  const { data } = await mainRequest.delete(`/project/${id}`);
  return data.data;
};

export const addNewProjectApi = async (project) => {
  const { data } = mainRequest.post("/project/add", project);
  return data.data;
};
