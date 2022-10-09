import { Text, TouchableOpacity, View } from "react-native";

const Item = (props) => (
  <View className="flex-row border items-stretch m-[5%] p-[15px] pr-[30px] ">
    <Text className="pl-[15px] pt-[5px] font-bold">{props.text}</Text>
    <TouchableOpacity onPress={props.delete} className="border-2 p-1 ml-auto">
      <Text className="font-bold">Delete</Text>
    </TouchableOpacity>
  </View>
);

export default Item;
