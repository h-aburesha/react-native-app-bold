import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const UserProfile = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: isDarkMode ? "#333" : "#fff" },
            ]}
        >
            <TouchableOpacity
                style={styles.darkModeToggle}
                onPress={toggleDarkMode}
            >
                <Text
                    style={[
                        styles.darkModeText,
                        { color: isDarkMode ? "#fff" : "#333" },
                    ]}
                >
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                </Text>
            </TouchableOpacity>
            <Image
                style={[
                    styles.profilePicture,
                    { borderColor: isDarkMode ? "#fff" : "#333" },
                ]}
                source={{
                    uri: "https://s3.amazonaws.com/spicedling/mNrCqHzefLSnO7UAroEignRdeo7s_AMc.jpeg",
                }}
            />
            <Text
                style={[
                    styles.nameText,
                    { color: isDarkMode ? "#fff" : "#333" },
                ]}
            >
                Hassan Aburesha
            </Text>
            <View style={styles.metricsContainer}>
                <View style={styles.metric}>
                    <Text
                        style={[
                            styles.metricTitle,
                            { color: isDarkMode ? "#fff" : "#333" },
                        ]}
                    >
                        Age:
                    </Text>
                    <Text
                        style={[
                            styles.metricValue,
                            { color: isDarkMode ? "#fff" : "#333" },
                        ]}
                    >
                        30
                    </Text>
                </View>
                <View style={styles.metric}>
                    <Text
                        style={[
                            styles.metricTitle,
                            { color: isDarkMode ? "#fff" : "#333" },
                        ]}
                    >
                        Weight:
                    </Text>
                    <Text
                        style={[
                            styles.metricValue,
                            { color: isDarkMode ? "#fff" : "#333" },
                        ]}
                    >
                        80 kg
                    </Text>
                </View>
                <View style={styles.metric}>
                    <Text
                        style={[
                            styles.metricTitle,
                            { color: isDarkMode ? "#fff" : "#333" },
                        ]}
                    >
                        BMI:
                    </Text>
                    <Text
                        style={[
                            styles.metricValue,
                            { color: isDarkMode ? "#fff" : "#333" },
                        ]}
                    >
                        25
                    </Text>
                </View>
                <View style={styles.metric}>
                    <Text
                        style={[
                            styles.metricTitle,
                            { color: isDarkMode ? "#fff" : "#333" },
                        ]}
                    >
                        Fat %:
                    </Text>
                    <Text
                        style={[
                            styles.metricValue,
                            { color: isDarkMode ? "#fff" : "#333" },
                        ]}
                    >
                        15%
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default UserProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 20,
    },
    darkModeToggle: {
        position: "absolute",
        top: 20,
        right: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
    darkModeText: {
        fontSize: 16,
    },
    profilePicture: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 1,
        marginTop: 100,
    },
    nameText: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 20,
    },
    metricsContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        paddingHorizontal: 20,
    },
    metric: {
        alignItems: "center",
    },
    metricTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    metricValue: {
        fontSize: 18,
    },
});
