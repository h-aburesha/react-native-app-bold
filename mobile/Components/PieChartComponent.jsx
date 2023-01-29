import PieChart from "react-native-expo-pie-chart";
import { useNavigation } from "@react-navigation/native";
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Dimensions,
    ScrollView,
    Button,
} from "react-native";

const MyPieChart = () => {
    const navigation = useNavigation();
    return (
        <>
            <SafeAreaView style={styles.container}>
                <Text style={styles.header}>Macronutrients</Text>

                <PieChart data={nutritionData} length={200} />
                <View style={styles.dataContainer}>
                    {nutritionData.map((item, index) => (
                        <Text key={index} style={styles.dataText}>
                            {item.key}: {item.count} grams
                        </Text>
                    ))}
                </View>
                <Button
                    title="Checkout New Recepies!"
                    onPress={() => navigation.navigate("Modal")}
                />
            </SafeAreaView>
        </>
    );
};

export default MyPieChart;
const styles = StyleSheet.create({
    header: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        padding: 16,
        marginTop: 64,
        color: "#ffffff",
        alignSelf: "center",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 0,
        backgroundColor: "#1E1E1E",
    },
    dataContainer: {
        marginTop: 16,
        backgroundColor: "#3C3C3C",
        borderRadius: 8,
        padding: 16,
    },
    dataText: {
        textAlign: "center",
        fontSize: 14,
        padding: 8,
        color: "#ffffff",
        width: Dimensions.get("window").width - 32,
    },
});

const nutritionData = [
    {
        key: "Carbs",
        count: 25,
        color: "blue",
    },
    {
        key: "Fats",
        count: 25,
        color: "yellow",
    },
    {
        key: "Protein",
        count: 50,
        color: "green",
    },
];
