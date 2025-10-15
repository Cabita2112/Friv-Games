import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Home() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  return (
    <View style={styles.contenedor}>

      <View style={styles.navbar}>
        <Text style={styles.logo}>[LOGO]</Text>

        <TouchableOpacity onPress={() => setMenuAbierto(true)}>
          <Entypo name="dots-three-vertical" size={22} color="#fff" />
        </TouchableOpacity>
      </View>


      <Modal
        transparent={true}
        visible={menuAbierto}
        animationType="fade"
        onRequestClose={() => setMenuAbierto(false)}
      >
        <TouchableOpacity
          style={styles.fondoOscuro}
          activeOpacity={1}
          onPressOut={() => setMenuAbierto(false)}
        >
          <View style={styles.menu}>
            <View style={styles.perfil}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
                }}
                style={styles.fotoPerfil}
              />
              <Text style={styles.nombre}>Nombre Apellido</Text>
            </View>

            <View style={styles.linea} />

            <TouchableOpacity style={styles.opcion}>
              <Text style={styles.textoOpcion}>Mis Juegos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.opcion}>
              <Text style={styles.textoOpcion}>Configuración</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.opcion}>
              <Text style={styles.textoOpcion}>Estadísticas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.opcion}>
              <Text style={[styles.textoOpcion, { color: "#d00" }]}>
                Cerrar Sesión
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      <View style={styles.cuerpo}>

        <TouchableOpacity
          style={styles.cuadroJuego}
          onPress={() => setMostrarMensaje(true)}
        >

          <Text style={styles.tituloJuego}>🎯 Juego: Laberinto</Text>

          <Image
            source={require("../img/laberinto.jpg")}
            style={styles.imagen}
          />
        </TouchableOpacity>

        <Text style={styles.bienvenida}>Bienvenido a la plataforma 🎮</Text>

 
        {mostrarMensaje && (
          <View style={styles.cuadroMensaje}>
            <Text style={styles.mensaje}>🚧 PRÓXIMAMENTE 🚧</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 4,
  },
  logo: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  fondoOscuro: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  menu: {
    marginTop: 60,
    marginRight: 10,
    width: 220,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
  perfil: {
    alignItems: "center",
    marginBottom: 10,
  },
  fotoPerfil: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 8,
  },
  nombre: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  linea: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 8,
  },
  opcion: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  textoOpcion: {
    fontSize: 15,
    color: "#333",
  },
  cuerpo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bienvenida: {
    fontSize: 18,
    color: "#333",
    fontWeight: "600",
    marginBottom: 10,
  },

  
  cuadroJuego: {
    position: "absolute",
    left: 20,
    top: "20%", 
    backgroundColor: "#fff",
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#007BFF",
    padding: 10,
    elevation: 8,
    alignItems: "center",
  },
  tituloJuego: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007BFF",
    marginBottom: 6,
  },
  imagen: {
    width: 140, 
    height: 140,
    borderRadius: 10,
  },

 
  cuadroMensaje: {
    borderWidth: 3,
    borderColor: "#007BFF",
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginTop: 25,
    backgroundColor: "#EAF2FF",
    elevation: 5,
  },
  mensaje: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#007BFF",
    textAlign: "center",
  },
});
