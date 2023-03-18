import axios from "axios";

export const loadUsersApi = async () => {
  let res = await axios.get("http://localhost:5000/users");
  return res;
};

export const createUsersApi = async (user) => {
    console.log("api")
  let res = await axios.post("http://localhost:5000/users", user);
  return res;
};
