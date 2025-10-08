import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Registro() {
  return (
    <View style={styles.container}>
      <View style={styles.registerBox}>
        <Text style={styles.title}>Crear Cuenta</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="Apellido"
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor="#999"
          keyboardType="email-address"
        />

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

        <TextInput
          style={styles.input}
          placeholder="Confirmar contraseña"
          placeholderTextColor="#999"
          secureTextEntry
        />

        <TouchableOpacity style={styles.boton}>
          <Text style={styles.textoBoton}>Registrarse</Text>
        </TouchableOpacity>

        <Text style={styles.login}>
          ¿Ya tienes cuenta? <Text style={styles.link}>Inicia sesión</Text>
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
  registerBox: {
    width: "85%",
    padding: 25,
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6, 
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
    backgroundColor: "#FAFAFA",
  },
  boton: {
    backgroundColor: "#28A745",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  textoBoton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  login: {
    textAlign: "center",
    marginTop: 20,
    color: "#555",
    fontSize: 14,
  },
  link: {
    color: "#28A745",
    fontWeight: "bold",
  },
});
