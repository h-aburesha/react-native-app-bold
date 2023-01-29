import { useState } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Modal,
    Text,
    SafeAreaView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import TodoList from "./TodoList";

const HoverMenu = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={styles.menu}
                onPress={() => setModalVisible(true)}
            >
                <AntDesign name="menu-fold" size={24} color="white" />
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modalContainer}>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => setModalVisible(false)}
                    >
                        <AntDesign name="close" size={24} color="white" />
                    </TouchableOpacity>
                    <View style={styles.modalContent}>
                        <TodoList />
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 30,
        left: 20,
        zIndex: 1,
    },
    menu: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 50,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        alignItems: "center",
        justifyContent: "center",
    },
    closeButton: {
        position: "absolute",
        top: 20,
        right: 20,
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 50,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    modalContent: {
        backgroundColor: "grey",

        width: "100%",

        borderColor: "white",

        padding: 4,
        borderRadius: 8,
    },
});

export default HoverMenu;
