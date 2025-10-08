import { StyleSheet, Text, View } from "react-native";
import Login from "./Frontend/Login";
import Registro from "./Frontend/Registro";
import Home from "./Frontend/Home";
export default function App() {
  return <Home></Home>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
