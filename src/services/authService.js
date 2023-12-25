import mainRequest from ".";

export const getOtp = (data) => {
  return mainRequest.post("/user/get-otp", data);
};

export const checkOtp = (data) => {
  return mainRequest.post("/user/check-otp", data);
};

export const completeUserProfileApi = (data) => {
  return mainRequest.post("/user/complete-profile", data);
};

export const getUserApi = async () => {
  const { data } = await mainRequest.get("/user/profile");
  return data;
};
