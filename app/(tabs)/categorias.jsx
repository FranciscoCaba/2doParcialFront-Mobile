import { Screen } from "@/components/mios/Screen";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text } from "react-native";
import { getCategorias } from "../../lib/carrito";

export default function Categoria() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    setCategorias(getCategorias());
  }, []);

  return (
    <Screen>
      {categorias.length === 0 ? (
        <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
        <FlatList
          data={categorias}
          keyExtractor={(categoria) => categoria.id}
          renderItem={({ item, index }) => (
            <Text style={styles.texto}>{item.nombre}</Text>
          )}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  texto: {
    color: "white",
  },
});
