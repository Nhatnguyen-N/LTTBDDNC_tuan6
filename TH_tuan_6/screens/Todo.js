import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import Item from "../components/item";

function Todo() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  var handerAddTodo = () => {
    if (value.length > 0) {
      setTodos([...todos, { text: value, key: Date.now(), checked: false }]);
      setValue(null);
    }
  };
  var handDeleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        if (todo.key !== id) return true;
      })
    );
  };

  return (
    <View className="items-center">
      <View className="items-center flex-row p-3">
        <TextInput
          placeholder="Todo"
          placeholderTextColor={"red"}
          multiline={true}
          onChangeText={(value) => setValue(value)}
          value={value}
          className="border w-[200px] h-10 p-[15px] "
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
            delete={() => handDeleteTodo(task.key)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default Todo;
