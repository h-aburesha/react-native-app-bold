import { Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./Components/Main";
import MyPieChart from "./Components/PieChartComponent";
import RecepiesModal from "./Components/RecepiesModal";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Group>
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="PieChart" component={MyPieChart} />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: "modal" }}>
                <Stack.Screen name="Recepies-Modal" component={RecepiesModal} />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default StackNavigator;
