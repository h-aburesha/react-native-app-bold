import PieChart from "react-native-expo-pie-chart";
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Dimensions,
    ScrollView,
} from "react-native";

const MyPieChart = () => {
    return (
        <>
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.header}>Macronutrients</Text>
                    <PieChart data={nutritionData} length={200} />
                    <View style={styles.dataContainer}>
                        {nutritionData.map((item, index) => (
                            <Text key={index} style={styles.dataText}>
                                {item.key}: {item.count} grams
                            </Text>
                        ))}
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};

export default MyPieChart;

const styles = StyleSheet.create({
    header: {
        textAlign: "center",
        fontSize: 18,
        padding: 16,
        marginTop: 16,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    dataContainer: {
        marginTop: 16,
    },
    dataText: {
        textAlign: "center",
        fontSize: 14,
        padding: 8,
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
