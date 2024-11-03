import { Screen } from "@/components/mios/Screen";
import { StyleSheet, Text, View } from "react-native";

export default function Productos() {
  return (
    <Screen>
      <View>
        <Text style={styles.texto}>Productos</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  texto: {
    color: "white",
  },
});
