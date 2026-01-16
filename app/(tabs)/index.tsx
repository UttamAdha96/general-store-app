import { CategoryItem } from "@/src/components/category/CategoryItem";
import { ProductCard } from "@/src/components/product/ProductCard";
import { useHomeData } from "@/src/hooks/useHomeData";
import { router } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { categories, products } = useHomeData();
  const isOpen = true;
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <>
            {/* Header */}
            <View style={styles.headerRow}>
              <View
                style={[
                  styles.statusBadge,
                  {
                    backgroundColor: isOpen ? "#DCFCE7" : "#FEE2E2",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.statusText,
                    { color: isOpen ? "#15803D" : "#B91C1C" },
                  ]}
                >
                  {isOpen ? "OPEN" : "CLOSED"}
                </Text>
              </View>

              <Text style={styles.storeName}>
                Nakoda Provision Store
              </Text>
            </View>

            {/* Search */}
            <View style={styles.searchBox}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search grocery..."
              />
            </View>

            {/* Categories */}
            <FlatList
              data={categories}
              horizontal
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoryList}
              renderItem={({ item }) => (
                <CategoryItem
                  category={item}
                  onPress={() =>
                    router.push(`/category/${item.id}`)
                  }
                />
              )}
            />
          </>
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
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },

  listContent: {
    paddingBottom: 100,
  },

  columnWrapper: {
    justifyContent: "space-between",
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    paddingTop: 20,
  },

  statusBadge: {
    paddingHorizontal: 24,
    paddingVertical: 4,
    borderRadius: 999,
  },

  statusText: {
    fontSize: 15,
    fontWeight: "600",
  },

  storeName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 24,
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
  },

  categoryList: {
    paddingBottom: 16,
  },
});
