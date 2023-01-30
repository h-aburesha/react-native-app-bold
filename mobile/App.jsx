import { Provider } from "react-redux";
import store from "./Redux/store";
import StackNavigator from "./StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import MyDrawer from "./DrawerNavigator";

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <MyDrawer />
            </NavigationContainer>
        </Provider>
    );
}
