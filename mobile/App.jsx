import { Provider } from "react-redux";
import store from "./Redux/store";
import Main from "./Components/Main";
import StackNavigator from "./StackNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <StackNavigator />
                <Main />
            </NavigationContainer>
        </Provider>
    );
}
