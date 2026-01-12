import { Product } from "@/src/types/product";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface Props {
  product: Product;
  onAddToCart: () => void;
}

export const ProductCard = ({ product, onAddToCart }: Props) => {
  return (
    <View
      style={{
        width: "48%",
        marginBottom: 16,
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 12,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 3,
      }}
    >
      {/* Image */}
      <Image
        source={product.image}
        resizeMode="cover"
        style={{
          width: "100%",
          height: 120,
          borderRadius: 12,
          backgroundColor: "#F3F4F6",
        }}
      />

      {/* Name */}
      <Text
        numberOfLines={2}
        style={{
          marginTop: 8,
          fontSize: 14,
          fontWeight: "600",
          color: "#111827",
        }}
      >
        {product.name}
      </Text>

      {/* Price */}
      <Text
        style={{
          marginTop: 4,
          fontSize: 14,
          fontWeight: "700",
          color: "#16A34A",
        }}
      >
        ₹{product.price}
      </Text>

      {/* CTA */}
      <TouchableOpacity
        onPress={onAddToCart}
        activeOpacity={0.8}
        style={{
          marginTop: 10,
          paddingVertical: 8,
          borderRadius: 10,
          backgroundColor: "#111827",
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            textAlign: "center",
            fontSize: 13,
            fontWeight: "600",
          }}
        >
          Add to Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};
