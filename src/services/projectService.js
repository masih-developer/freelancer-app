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
  const { data } = await mainRequest.post("/project/add", project);
  return data.data;
};

export const editProjectApi = async ({ id, newProject }) => {
  const { data } = await mainRequest.patch(`/project/update/${id}`, newProject);
  return data.data;
};

export const toggleProjectStatusApi = async ({ id, project }) => {
  const { data } = await mainRequest.patch(`/project/${id}`, project);
  return data.data;
};

export const getProjectApi = async (id) => {
  const { data } = await mainRequest.get(`/project/${id}`);
  return data.data;
};

export const getProjectsApi = async (params) => {
  const { data } = await mainRequest.get("/project/list", { params });
  return data.data;
};
