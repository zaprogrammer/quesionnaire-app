import {StyleSheet} from "react-native";

const HomeStyles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flatList: {
        width: '100%',
        marginBottom: 8,
    },
    QuestionListContainer: {
        margin: 8,
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#DEDEDE'
    },
    questionText: {
        fontSize: 16,
        fontWeight: 'bold',
    }
})

export default HomeStyles
