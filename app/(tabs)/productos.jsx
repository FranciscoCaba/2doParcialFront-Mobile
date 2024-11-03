import { Screen } from "@/components/mios/Screen";
import { useEffect, useState } from "react";
import { getProductos, addProducto } from "@/lib/carrito";
import { ActivityIndicator, FlatList, StyleSheet, Text } from "react-native";

export default function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    addProducto({
      id: 4,
      nombre: "Mouse",
      idCategoria: 2,
      precioVenta: 100000,
    });
    setProductos(getProductos());
  }, []);

  return (
    <Screen>
      {productos.length === 0 ? (
        <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
        <FlatList
          data={productos}
          keyExtractor={(producto) => producto.id}
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
