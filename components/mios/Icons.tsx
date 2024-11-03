import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const CircleInfoIcon = (props: any) => (
  <FontAwesome6 name="circle-info" size={24} color="white" {...props} />
);

export const HomeIcon = (props: any) => (
  <FontAwesome name="home" size={32} color="white" {...props} />
);

export const InfoIcon = (props: any) => (
  <FontAwesome name="info" size={32} color="white" {...props} />
);

export const BoxIcon = (props: any) => (
  <FontAwesome6 name="box-open" size={24} color="black" {...props} />
);

export const SellIcon = (props: any) => (
  <MaterialIcons name="sell" size={24} color="white" {...props} />
);

export const CategoryIcon = (props: any) => (
  <MaterialIcons name="text-snippet" size={24} color="black" {...props} />
);
