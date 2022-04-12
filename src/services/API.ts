const API_BASE_URL = 'https://polls.apiblueprint.org';

export const getQuestionsAPI = async (uri: string) => {
    let response = await fetch(`${API_BASE_URL}${uri}`);
    return await response.json();
}