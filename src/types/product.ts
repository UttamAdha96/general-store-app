import { ImageSourcePropType } from "react-native";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: ImageSourcePropType;
}
