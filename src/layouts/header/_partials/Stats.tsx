import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { setScreenName } from '../../../store/user/userSlice';
import { resetIndex } from '../../../store/questions/questionsSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';

import * as useNavigate from '../../../navigation/useNavigate';

import Button from '../../../components/button/Button';

import styles from '../../../assets/styles/Stats.style';

function Stats() {
    const { username, difficulty } = useSelector((state:RootState) => state.user);  
    const index = useSelector((state: RootState) => state.questions.index);  

    const dispatch:AppDispatch = useDispatch();

    const handleQuit = () => {
        useNavigate.navigate('Intro');
        dispatch(setScreenName('intro'));
        dispatch(resetIndex());
    }

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.textContainer}>
                    <Text style={[styles.textWeight, styles.textSize]}>Player: </Text>
                    <Text style={styles.textSize}>{username}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={[styles.textWeight, styles.textSize]}>Difficulty: </Text> 
                    <Text style={styles.textSize}>{difficulty}</Text>
                </View>
            </View>
            <View>
                <Text style={[styles.textWeight, styles.textSize]}>{index}/10</Text>
                <Button title='Quit' onPress={handleQuit} btnStyle={styles.button} titleStyle={styles.textSize}/>
            </View>
        </View>
    );
}

export default Stats;