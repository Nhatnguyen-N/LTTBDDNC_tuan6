import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import Todo from "./screens/Todo";
import TodoAPI from "./screens/TodoAPI";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          {/* <Stack.Screen name="Todo" component={Todo} /> */}
          <Stack.Screen name="TodoAPI" component={TodoAPI} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
