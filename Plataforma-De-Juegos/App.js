import { StyleSheet, Text, View } from "react-native";
import Login from "./Frontend/Login";
import Registro from "./Frontend/Registro";
export default function App() {
  return <Registro></Registro>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
