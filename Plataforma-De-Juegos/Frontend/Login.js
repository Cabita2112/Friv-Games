import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <Text style={styles.title}>Iniciar Sesión</Text>

        <TextInput
          style={styles.input}
          placeholder="Usuario"
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#999"
          secureTextEntry
        />

        <TouchableOpacity style={styles.boton}>
          <Text style={styles.textoBoton}>Ingresar</Text>
        </TouchableOpacity>

        <Text style={styles.registro}>
          ¿No tienes cuenta? <Text style={styles.link}>Regístrate</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF0F1",
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    width: "85%",
    padding: 25,
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
    color: "#333",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  boton: {
    backgroundColor: "#007BFF",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  textoBoton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  registro: {
    textAlign: "center",
    marginTop: 20,
    color: "#555",
    fontSize: 14,
  },
  link: {
    color: "#007BFF",
    fontWeight: "bold",
  },
});
