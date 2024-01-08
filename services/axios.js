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

export const login = async (data) => {
  return instance.post("/login", data, {
    headers: {
      authorization: `Bearer bad37175c487c7b829cc9d1bd10558f7d17c3a290af0b15e6f1449de8fcb290d`,
    },
  });
};
