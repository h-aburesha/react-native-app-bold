import { ScrollView, StyleSheet, Text, Image, View } from "react-native";

const MyCarousel = () => {
    return (
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
    );
};

export default MyCarousel;

const styles = StyleSheet.create({
    cardContainer: {
        width: 300,
        height: 400,
        backgroundColor: "#ffffff",
        marginHorizontal: 16,
        borderRadius: 8,
        alignItems: "center",
    },
    cardImage: {
        width: "100%",
        height: 200,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
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
        imageURL: "",
        header: "",
        description: "",
    },
    {
        imageURL: "",
        header: "",
        description: "",
    },
    // Add more items as needed
];
