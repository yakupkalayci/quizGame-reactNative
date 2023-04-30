import { View, Text, TouchableHighlight, TouchableOpacity, Animated, Image, Dimensions } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view';

import styles from '../../assets/styles/ScoreItem.style';

interface ScoreItemProps {
    savedScores: any[] | undefined;
    onRemove: (id:number) => void;
}

function ScoreItem(props: ScoreItemProps) {
    // destruct props
    const { savedScores, onRemove } = props;
    
    let animationIsRunning = false;

    const handleDelete = (swipeData) => {
        const {key, value} = swipeData;
        if (value >= Dimensions.get('window').width / 2 && !animationIsRunning) {
          animationIsRunning = true;
          Animated.timing(new Animated.Value(0), {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }).start(() => {
            animationIsRunning = false;
            onRemove(key);
          });
        }
      };

    const renderItem = data => {
        return (
            <Animated.View>
              <TouchableHighlight
                style={styles.rowFront}
                underlayColor={'#e5e5e5'}
              >
                <View style={styles.score}>
                    <Text>{data.item.date}</Text>
                    <Text style={styles.playerText}>{data.item.username}</Text>
                    <Text>{data.item.score}</Text>
                </View>
              </TouchableHighlight>
            </Animated.View>
          );
    };

    const renderHiddenItem = () => (
        <View style={styles.rowBack}>
          <TouchableOpacity style={[styles.backLeftBtn, styles.warningBtn]}>
            <Image source={require('../../assets/images/bin.png')} style={styles.dangerImage} />
          </TouchableOpacity>
        </View>
      );

  return (
    <View>
    {
        savedScores?.length ? (
            <SwipeListView
                data={savedScores}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                onSwipeValueChange={handleDelete}
                keyExtractor={(item) => item.id}
                rightOpenValue={-150}
                stopLeftSwipe={Dimensions.get('window').width / 2}
                stopRightSwipe={-150}
                disableLeftSwipe
          />
        ) : (
            <Text style={styles.infoText}>No item!</Text>
        )
    }
    </View>
  )
}

export default ScoreItem;
