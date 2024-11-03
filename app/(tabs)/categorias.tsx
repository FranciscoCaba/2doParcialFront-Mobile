import { Screen } from "@/components/mios/Screen";
import { StyleSheet, Text, View } from "react-native";

export default function Categoria() {
  return (
    <Screen>
      <View>
        <Text style={styles.texto}>Categoria</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  texto: {
    color: "white",
  },
});
