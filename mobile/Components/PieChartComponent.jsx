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
            <View style={styles.container}>
                <Text style={styles.header}>Macronutrients</Text>
                <PieChart
                    data={[
                        {
                            key: "First Data",
                            count: 20,
                            color: "blue",
                        },
                        {
                            key: "Second Data",
                            count: 25,
                            color: "yellow",
                        },
                        {
                            key: "Third Data",
                            count: 40,
                            color: "green",
                        },
                        {
                            key: "Forth Data",
                            count: 35,
                            color: "orange",
                        },
                    ]}
                    length={200}
                />
            </View>
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
});
