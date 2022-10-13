import { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import Item from "../components/item";

export default function TodoAPI() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch(`https://63443c6a242c1f347f820672.mockapi.io/api/Todo/Todo`)
      .then((data) => data.json())
      .then((data) => setTodos(data));
  }, []);

  function handerAddTodo() {
    fetch(`https://63443c6a242c1f347f820672.mockapi.io/api/Todo/Todo`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
    fetch(`https://63443c6a242c1f347f820672.mockapi.io/api/Todo/Todo`)
      .then((data) => data.json())
      .then((data) => setTodos(data));

    setTodo("");
  }

  return (
    <View className="items-center">
      <View className="items-center flex-row p-3">
        <TextInput
          placeholder="Todo"
          placeholderTextColor={"green"}
          multiline={true}
          onChangeText={(todo) => {
            setTodo({
              key: Math.random().toString(),
              text: todo,
            });
          }}
          value={todo}
          className="border w-[200px] h-10 p-[5px] "
        />
        <TouchableOpacity
          className="border-2 p-2 ml-5 rounded-lg"
          onPress={() => handerAddTodo()}
        >
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ width: "100%" }}>
        {todos.map((task) => (
          <Item
            text={task.text}
            key={task.key}
            delete={() => {
              fetch(
                `https://63443c6a242c1f347f820672.mockapi.io/api/Todo/Todo/` +
                  task.key,
                {
                  method: `DELETE`,
                  headers: { "Content-Type": "application/json" },
                }
              );
              fetch(`https://63443c6a242c1f347f820672.mockapi.io/api/Todo/Todo`)
                .then((data) => data.json())
                .then((data) => setTodos(data));
              Alert.alert(
                `https://63443c6a242c1f347f820672.mockapi.io/api/Todo/Todo/` +
                  task.key
              );
              console.log(
                `https://63443c6a242c1f347f820672.mockapi.io/api/Todo/Todo/` +
                  task.key
              );
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
}
