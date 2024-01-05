import { create } from "zustand";
import { getCategories } from "../services/axios";

const useCategory = create((set) => ({
  data: [],
  fetchData: async () => {
    try {
      const response = await getCategories();
      const data = response.data.data;

      set({ data });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useCategory;
