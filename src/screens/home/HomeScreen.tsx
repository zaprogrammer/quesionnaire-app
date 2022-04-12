import {ActivityIndicator, FlatList, View} from "react-native";
import React, {useEffect, useState} from "react";
import QuestionListItem from "./QuestionListItem";
import {getQuestionsAPI} from "../../services/API";
import {QuestionModel} from "../../model/QuestionModel";
import HomeStyles from "./HomeStyles";

const HomeScreen = () => {
    const QUESTIONS_COLLECTION_URI = '/questions?page=';

    // Holds collection of questions
    const [questionsData, setQuestionsData] = useState<QuestionModel[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // Pagination for the API
    const [page, setPage] = useState<number>(1);

    // Handles showing of loader and calling of API
    const fetchQuestions = () => {
        setIsLoading(true);

        getQuestionsAPI(`${QUESTIONS_COLLECTION_URI}${page}`).then((res) => {
            if (res.length > 0) {
                setQuestionsData([...questionsData, ...res]);
                setPage(page + 1);
            }
            setIsLoading(false);
        }).catch((error) => {
            setQuestionsData([])
            setIsLoading(false);
        });
    }

    useEffect(() => {
        fetchQuestions();
    }, []);

    return (
        <View style={HomeStyles.homeContainer}>
            {isLoading && questionsData.length == 0 ? <ActivityIndicator size={'large'} color="#0000ff"/> :
                (<FlatList
                    testID={'flat-list'}
                    style={HomeStyles.flatList}
                    data={questionsData}
                    onEndReachedThreshold={0}
                    onEndReached={fetchQuestions}
                    keyExtractor={(item, index) => item.published_at.toString() + index}
                    renderItem={({item}) =>
                        <QuestionListItem question={item}/>
                    }
                />)
            }
            {isLoading && questionsData.length > 0 && <ActivityIndicator size={'small'} color="#0000ff"/>}
        </View>
    )
}

export default HomeScreen;
