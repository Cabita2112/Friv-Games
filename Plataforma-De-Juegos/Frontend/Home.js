import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import { Entypo } from "@expo/vector-icons"; //importa los tres puntitos en el nadvar

export default function Home() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.logoText}>[LOGO]</Text>

        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Entypo name="dots-three-vertical" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={menuVisible}
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPressOut={() => setMenuVisible(false)}
        >
          <View style={styles.menu}>
            <View style={styles.profileSection}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
                }}
                style={styles.profileImage}
              />
              <Text style={styles.profileName}>Nombre Apellido</Text>
            </View>

            <View style={styles.line} />
            <TouchableOpacity style={styles.menuOption}>
              <Text style={styles.menuText}>Mis Juegos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuOption}>
              <Text style={styles.menuText}>Configuración</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuOption}>
              <Text style={styles.menuText}>Estadísticas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuOption}>
              <Text style={[styles.menuText, { color: "#d00" }]}>
                Cerrar Sesión
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      <View style={styles.body}>
        <Text style={styles.welcome}>Bienvenido a la plataforma 🎮</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  logoText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  overlay: {
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
  profileSection: {
    alignItems: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 8,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  line: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 8,
  },
  menuOption: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  menuText: {
    fontSize: 15,
    color: "#333",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    fontSize: 18,
    color: "#333",
    fontWeight: "600",
  },
});
