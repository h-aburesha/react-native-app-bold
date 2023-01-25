import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Main() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Hi Mint!!</Text>
            <StatusBar style="auto" />
        </View>
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