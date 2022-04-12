import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    questionText: {
        margin: 8,
        fontSize: 28,
        fontWeight: "bold",
    },
    choiceContainer: {
        margin: 8,
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#DEDEDE',
    },
    choiceText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonContainer: {
        width: '100%',
        alignItems: "center",
        padding: 10,
        justifyContent: "center"
    },
    button: {
        width: '40%',
        alignItems: "center",
        backgroundColor: '#F5FCFF',
        borderRadius: 8,
        padding: 16,
    },
    buttonText: {
        fontWeight: "bold",
        color: '#336296',
    },
})

export default styles
