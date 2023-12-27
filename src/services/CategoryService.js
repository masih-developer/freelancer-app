import mainRequest from ".";

export const getCategoryApi = async () => {
  const { data } = await mainRequest.get("/category/list");
  return data.data;
};
