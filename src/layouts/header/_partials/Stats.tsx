// React
import { View, Text } from 'react-native';

// Store
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { setScreenName } from '../../../store/user/userSlice';
import { resetIndex } from '../../../store/questions/questionsSlice';
import { AppDispatch } from '../../../store/store';

// useNavigate
import * as useNavigate from '../../../navigation/useNavigate';

// Components
import Button from '../../../components/button/Button';

// styles
import styles from '../../../assets/styles/Stats.style';

function Stats() {
    // useSelector
    const { username, difficulty } = useSelector((state:RootState) => state.user);  
    const index = useSelector((state: RootState) => state.questions.index);  

    // useDispatch
    const dispatch:AppDispatch = useDispatch();

    // functions
    // quit the game
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