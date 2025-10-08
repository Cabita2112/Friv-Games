//dependencias a instalar
//npm install @react-navigation/native
//npm install @react-navigation/stack
//npm install react-native-screens react-native-safe-area-context
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Frontend/Login";
import Registro from "./Frontend/Registro";
import Home from "./Frontend/Home";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false, // oculta la barra superior
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
