import { View, Text } from 'react-native'

import styles from '../../../../assets/styles/ScoresModal.style';

interface ScoresModalHeaderProps {
    titles: string[];
}

function ScoresModalHeader(props: ScoresModalHeaderProps) {
    // destruct props
    const { titles } = props;

    return (
        <View style={styles.header}>
            {
                titles.map((title, index) => (
                    <Text
                        key={title}
                        style={index == 0 ? [styles.modalTitleDate, styles.modalTitle]
                            : styles.modalTitle}>
                        {title}
                    </Text>
                ))
            }
        </View>
    )
}

export default ScoresModalHeader;
