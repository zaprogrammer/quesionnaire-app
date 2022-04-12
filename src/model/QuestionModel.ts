import {ChoiceModel} from "./ChoiceModel";

export interface QuestionModel {
    question: string,
    choices: ChoiceModel[],
    published_at: string,
    url: string,
}