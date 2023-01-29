import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image,
} from "react-native";

import React from "react";

const RecepiesModal = () => {
    return (
        <SafeAreaView>
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
            >
                {articlesData.map((item, index) => (
                    <View style={styles.cardContainer} key={index}>
                        <Image
                            style={styles.cardImage}
                            source={{ uri: item.imageURL }}
                        />
                        <Text style={styles.cardHeader}>{item.header}</Text>
                        <Text style={styles.cardDescription}>
                            {item.description}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default RecepiesModal;

const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 10,
        width: 300,
        height: 400,
        backgroundColor: "#ffffff",
        marginHorizontal: 16,
        borderRadius: 8,
        alignItems: "center",
    },
    cardImage: {
        flex: 1,
        width: "100%",
        height: 200,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        resizeMode: "cover",
        justifyContent: "center",
    },
    cardHeader: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 16,
        textAlign: "center",
    },
    cardDescription: {
        fontSize: 16,
        padding: 16,
        textAlign: "center",
    },
});

const articlesData = [
    {
        imageURL:
            "https://s3.amazonaws.com/spicedling/XYtyCqYVt4MUhVNWRz59ADVkdDao3hcX.jpg",
        header: "Grilled Salmon",
        description: "Rich in omega-3 fatty acids",
    },
    {
        imageURL:
            "https://s3.amazonaws.com/spicedling/br04ecldSHYjuVoZjn_9ljYOu8J0euYf.jpg",
        header: "Shripms Salad",
        description: "Tasty Seafood",
    },
    {
        imageURL:
            "https://s3.amazonaws.com/spicedling/Q1LNzIlY5Fh5hu00aQ1AwHC6tinyMZoK.jpg",
        header: "Vegan Bowl",
        description: "Guilty Free",
    },
    {
        imageURL:
            "https://s3.amazonaws.com/spicedling/gGTWCnuZKiNsYZSi8qOBLwSgfV_45BZR.jpg",
        header: "Teriyaki",
        description: "A spin on a classic",
    },
];
