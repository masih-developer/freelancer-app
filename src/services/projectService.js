import mainRequest from ".";

export const getOwnerProjectsApi = async () => {
    const { data } = await mainRequest.get("/project/owner-projects");
    return data.data;
};
