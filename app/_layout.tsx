import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Layout() {
  return (
    <View style={styles.principal}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#27498c" },
          headerTintColor: "white",
          headerTitle: "App Carrito de Compras",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  principal: {
    backgroundColor: "black",
    flex: 1,
  },
});
