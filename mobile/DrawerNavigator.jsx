import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";

import UserProfile from "./Components/UserProfile";
import MyPieChart from "./Components/PieChartComponent";
import Main from "./Components/Main";
import TodoList from "./Components/TodoList";

const MyDrawer = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerPosition="right"
        >
            <Drawer.Screen name="Home Page" component={StackNavigator} />
            <Drawer.Screen name="Main" component={Main} />
            <Drawer.Screen name="Profile" component={UserProfile} />
            <Drawer.Screen name="Macronutrients" component={MyPieChart} />
        </Drawer.Navigator>
    );
};

export default MyDrawer;
