import { categories, products } from "@/src/api/mockData";

export const useHomeData = () => {
  return {
    categories,
    products,
    isLoading: false,
    error: null,
  };
};


// tommow this hook will call an api to fetch real data