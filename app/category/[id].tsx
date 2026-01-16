import { ProductCard } from "@/src/components/product/ProductCard";
import { useHomeData } from "@/src/hooks/useHomeData";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CategoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const insets = useSafeAreaInsets();

  const { products, categories } = useHomeData();

  const category = categories.find(c => c.id === id);
  const filteredProducts = products.filter(
    product => product.categoryId === id
  );

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top },
      ]}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>
          {category?.name ?? "Category"}
        </Text>
      </View>

      {/* Product List */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No products in this category
          </Text>
        }
        renderItem={({ item }) => (
          <ProductCard product={item} onAddToCart={() => {}} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
  },

  header: {
    paddingVertical: 16,
  },

  backText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 8,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111",
  },

  row: {
    justifyContent: "space-between",
  },

  listContent: {
    paddingTop: 16,
    paddingBottom: 80,
  },

  emptyText: {
    textAlign: "center",
    marginTop: 60,
    fontSize: 16,
    color: "#888",
  },
});
