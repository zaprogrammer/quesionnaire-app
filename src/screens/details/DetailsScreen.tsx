import React, {useState} from "react";
import {Alert, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {QuestionModel} from "../../model/QuestionModel";
import {getQuestionsAPI} from "../../services/API";
import {ChoiceModel} from "../../model/ChoiceModel";
import styles from "./DetailsStyles";

const DetailsScreen = ({route}: any) => {
    const questionObject: QuestionModel = route.params.question;
    const emptyChoice = {choice: '', url: '', votes: 0};

    // To detect which choice is selected and deselect others
    const [selected, setSelected] = useState<boolean>(false);
    // Holds the value of current selected choice to send to API
    const [selectedChoice, setSelectedChoice] = useState<ChoiceModel>(emptyChoice);

    // Submit selected vote result to API
    const submitVote = () => {
        if (selectedChoice.url.length > 0) {
            getQuestionsAPI(selectedChoice.url).then((res) => {
                Alert.alert('Success', `You voted for ${selectedChoice.choice} successfully!`)
            }).catch((error) => {
            });
        } else {
            Alert.alert('Reminder', 'Please select a vote before submitting!')
        }
    }

    return (
        <ScrollView>
            <Text style={styles.questionText}>{questionObject.question}</Text>
            {questionObject.choices.map((choice) => (
                <View key={choice.url}>
                    <TouchableOpacity
                        style={styles.choiceContainer}
                        onPress={() => {
                            setSelected((prev) => !prev);
                            setSelectedChoice(choice);
                        }}>
                        <Text style={styles.choiceText}>{choice.choice}</Text>
                    </TouchableOpacity>
                </View>
            ))}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => submitVote()}>
                    <Text style={styles.buttonText}>{'Vote'}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default DetailsScreen;
