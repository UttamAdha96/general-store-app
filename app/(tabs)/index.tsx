import { CategoryItem } from "@/src/components/category/CategoryItem";
import { ProductCard } from "@/src/components/product/ProductCard";
import { useHomeData } from "@/src/hooks/useHomeData";
import { router } from "expo-router";
import { FlatList, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const { categories, products } = useHomeData();
  const isOpen = true;

  return (
    <View className="flex-1 bg-white px-4 pt-12">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            {/* Header */}
            <View className="flex-row items-center justify-between mb-4">
              <View
                className="px-6 py-1 rounded-full"
                style={{ backgroundColor: isOpen ? "#DCFCE7" : "#FEE2E2" }}
              >
                <Text
                  className={`text-lg font-semibold ${
                    isOpen ? "text-green-700" : "text-red-700"
                  }`}
                >
                  {isOpen ? "OPEN" : "CLOSED"}
                </Text>
              </View>

              <Text className="text-xl font-bold text-gray-900">
                Nakoda Provision Store
              </Text>
            </View>

            {/* Search */}
            <View className="flex-row items-center bg-gray-100 rounded-2xl px-4 py-2 mb-6">
              <TextInput
                className="flex-1 text-base"
                placeholder="Search grocery..."
              />
            </View>

            {/* Categories */}
            <FlatList
              data={categories}
              horizontal
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 16 }}
              renderItem={({ item }) => (
                <CategoryItem
                  category={item}
                  onPress={() => router.push(`/category/${item.id}`)}
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
