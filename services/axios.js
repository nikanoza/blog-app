import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.blog.redberryinternship.ge/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const getCategories = async () => {
  return instance.get("/categories");
};
