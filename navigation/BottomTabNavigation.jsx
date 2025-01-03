import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";
import { Home, Location, Chat, Profile } from "../screens";

const Tab = createBottomTabNavigator();

const TabBarStyle = {
  padding: 20,
  borderRadius: 20,
  height: 80,
  position: "absolute",
  bottom: 20,
  left: 20,
  right: 20,
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={COLORS.red}
      tabBarHideOnKeyboard={true}
      headerShown={false}
      inactiveColor="#3e2465"
      barStyle={{ paddingBottom: 48 }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarStyle: TabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return <Ionicons 
            name={focused ? "grid" : "grid-outline"} 
            color={focused ? COLORS.red : COLORS.gray} 
            size={26} 
            />
          },
        }}
      />
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          tabBarStyle: TabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return <Ionicons 
            name={focused ? "location" : "location-outline"} 
            color={focused ? COLORS.red : COLORS.gray} 
            size={26} 
            />
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarStyle: TabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return <Ionicons 
            name={focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"} 
            color={focused ? COLORS.red : COLORS.gray} 
            size={26} 
            />
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarStyle: TabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return <Ionicons 
            name={focused ? "person" : "person-outline"} 
            color={focused ? COLORS.red : COLORS.gray} 
            size={26} 
            />
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
