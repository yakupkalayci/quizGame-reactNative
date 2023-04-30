import AsyncStorage from "@react-native-async-storage/async-storage";

export const getSavedScoresFromStorage = async () => {
    try {
        const savedScores = await AsyncStorage.getItem('scores');
        if (savedScores !== null) {
            return JSON.parse(savedScores);
        } else {
            return [];
        }
    } catch (err) {
        console.log(err);
    }
}