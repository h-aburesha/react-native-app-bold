import { Provider } from "react-redux";
import store from "./Redux/store";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Text style={styles.titleText}>Hi Mint!!</Text>
                <StatusBar style="auto" />
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        fontSize: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    titleText: {
        fontSize: 50,
        fontWeight: "bold",
    },
});
