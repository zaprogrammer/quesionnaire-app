import {Text, TouchableOpacity} from "react-native";
import React from "react";
import {QuestionModel} from "../../model/QuestionModel";
import {useNavigation} from "@react-navigation/native";
import HomeStyles from "./HomeStyles";

interface QuestionListItemProps {
    question: QuestionModel,
}

const QuestionListItem = ({question}: QuestionListItemProps) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={HomeStyles.QuestionListContainer} onPress={() => navigation.navigate('Details', {question: question})}>
            <Text style={HomeStyles.questionText}>{question.question}</Text>
        </TouchableOpacity>
    )
}

export default QuestionListItem;
