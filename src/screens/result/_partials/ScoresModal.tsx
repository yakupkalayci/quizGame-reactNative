// React
import { useEffect, useState } from 'react';
import { View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

// Modal
import Modal from 'react-native-modal';

// Constants
import { ALERT_TYPE } from 'react-native-alert-notification';

// Utils
import { getSavedScoresFromStorage } from '../../../common/utils/getSavedScores';
import { showToast } from '../../../common/utils/showToast';

// Partials
import ScoresModalHeader from './_partials/ScoresModalHeader';

// Components
import ScoreItem from '../../../components/score-item/ScoreItem';

// style
import styles from '../../../assets/styles/ScoresModal.style';

interface AnswerModalProps {
    isVisible: boolean,
    onModalEvent: () => void,
    scores: any;
}

function ScoresModal(props: AnswerModalProps) {
    // destruct props
    const { isVisible, onModalEvent, scores } = props;

    const [savedScores, setSavedScores] = useState<any[]>();

    const getSavedScores = async () => {
        setSavedScores(await getSavedScoresFromStorage());
    }

    const removeItem = async (id:number) => {
        try {
            const existingData = await getSavedScoresFromStorage();
            const newData = existingData.filter(item => item.id !== id);
            await AsyncStorage.setItem('scores', JSON.stringify(newData));
            await getSavedScores();
            showToast(ALERT_TYPE.SUCCESS, 'Success', 'Deleted');
        } catch(err: any) {
            showToast(ALERT_TYPE.DANGER, 'Error', err.message);
        }
        
    };

    useEffect(() => {
        getSavedScores();
    }, [scores]);

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onModalEvent}
            style={styles.modal}
        >
            <View style={styles.view}>
                <ScoresModalHeader titles={['Date', 'Player', 'Score']} />
                <ScoreItem savedScores={savedScores} onRemove={removeItem} />
            </View>
        </Modal>
    )
}

export default ScoresModal;