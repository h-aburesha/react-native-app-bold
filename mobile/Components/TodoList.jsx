import { useState } from "react";
import {
    View,
    Text,
    Button,
    TextInput,
    SafeAreaView,
    StyleSheet,
    ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const handleAddTodo = async () => {
        try {
            const todosFromStorage = await AsyncStorage.getItem("todos");
            let todosArray = JSON.parse(todosFromStorage) || [];
            todosArray.push(newTodo);
            setTodos(todosArray);
            setNewTodo("");
            await AsyncStorage.setItem("todos", JSON.stringify(todosArray));
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteTodo = async (todo) => {
        try {
            const todosFromStorage = await AsyncStorage.getItem("todos");
            let todosArray = JSON.parse(todosFromStorage) || [];
            todosArray = todosArray.filter((t) => t !== todo);
            setTodos(todosArray);
            await AsyncStorage.setItem("todos", JSON.stringify(todosArray));
        } catch (exception) {
            console.log(exception);
        }
    };

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Todo List</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Add a todo"
                        value={newTodo}
                        onChangeText={(text) => setNewTodo(text)}
                        style={styles.input}
                    />
                    <View style={styles.inputAddButton}>
                        <Button title="+" onPress={handleAddTodo} />
                    </View>
                </View>
                <View style={styles.todoListContainer}>
                    {todos.map((todo, index) => (
                        <View key={index} style={styles.todoItem}>
                            <Text style={styles.todoText}>{todo}</Text>
                            <View style={styles.deleteButton}>
                                <Button
                                    title="x"
                                    onPress={() => handleDeleteTodo(todo)}
                                />
                            </View>
                        </View>
                    ))}
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default TodoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        alignItems: "center",
    },
    header: {
        height: 60,
        padding: 15,
        backgroundColor: "#1E1E1E",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    },
    inputContainer: {
        height: 60,
        padding: 15,
        width: "100%",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "#1E1E1E",
        flexDirection: "row",
    },
    input: {
        width: "80%",
        height: 42,
        padding: 8,
        backgroundColor: "#2E2E2E",
        borderRadius: 5,
        marginRight: 10,
        color: "#fff",
    },
    inputAddButton: {
        width: "20%",
        height: 42,
        backgroundColor: "#2E2E2E",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    todoListContainer: {
        flex: 1,
        width: "100%",
        backgroundColor: "#121212",
        alignItems: "center",
        padding: 15,
    },
    todoItem: {
        width: "100%",
        height: 60,
        padding: 15,
        backgroundColor: "#1E1E1E",
        borderRadius: 5,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    todoText: {
        fontSize: 18,
        color: "#fff",
    },
    deleteButton: {
        width: 42,
        height: 42,
        backgroundColor: "#2E2E2E",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
});
