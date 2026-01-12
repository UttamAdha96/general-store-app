import { Category } from "@/src/types/category";
import { Product } from "@/src/types/product";

export const categories: Category[] = [
  {
    id: "fruits",
    name: "Fruits",
    image: require("@/assets/images/categories/fruits.png"),
  },
  {
    id: "vegetables",
    name: "Vegetables",
    image: require("@/assets/images/categories/vegetables.png"),
  },
  {
    id: "snacks",
    name: "Snacks",
    image: require("@/assets/images/categories/snacks.png"),
  },
  {
    id: "drinks",
    name: "Drinks",
    image: require("@/assets/images/categories/drinks.png"),
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Apple (1kg)",
    price: 120,
    image: require("@/assets/images/products/apple.png"),
  },
  {
    id: "2",
    name: "Banana (1 dozen)",
    price: 60,
    image: require("@/assets/images/products/banana.png"),
  },
  {
    id: "3",
    name: "Tomato (1kg)",
    price: 40,
    image: require("@/assets/images/products/tomato.png"),
  },
  {
    id: "4",
    name: "Milk (1L)",
    price: 58,
    image: require("@/assets/images/products/milk.png"),
  },
  {
    id: "5",
    name: "Potato Chips",
    price: 20,
    image: require("@/assets/images/products/chips.png"),
  },
];
