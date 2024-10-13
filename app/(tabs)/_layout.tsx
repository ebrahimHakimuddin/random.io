import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from "@expo/vector-icons/build/Octicons";
export default function TabLayout(){
    return (
        <Tabs>
          <Tabs.Screen name="numberRandomizer" options={{ title: 'Number Randomizer', tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'people-sharp' : 'people-outline'} color={color} size={24} />
          ), }} />
          <Tabs.Screen name="teamRandomizer" options={{ title: 'Team Randomizer', tabBarIcon:({color}) => (<Octicons name="number" size={24} color={color} />) }}/>
        </Tabs>
      );
} 