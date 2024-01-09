import { create } from "zustand";
import { getCategories } from "../services/axios";

const useLogin = create((set) => ({
  loginStatus: false,
  login: () => {
    set({ loginStatus: true });
  },
}));

export default useLogin;
