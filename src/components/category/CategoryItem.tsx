import { Category } from "@/src/types/category";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface Props {
  category: Category;
  onPress: () => void;
}

export const CategoryItem = ({ category, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        width: 80,
         height: 120,
        alignItems: "center",
        marginRight: 12,
      }}
    >
      <View
        style={{
          width: 64,
          height: 64,
          borderRadius: 32,
          backgroundColor: "#F3F4F6", // light gray
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={category.image}
          resizeMode="cover"
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
        />
      </View>

      <Text
        numberOfLines={1}
        style={{
          marginTop: 6,
          fontSize: 12,
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );
};

// This component represents a single category item with an image and name.