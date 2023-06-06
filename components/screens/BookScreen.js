import {Text} from "react-native";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {useNavigation} from "@react-navigation/native";


export default function BookScreen() {

    const navigation = useNavigation();
    const onSwipe = (gestureName, gestureState) => {
        const { SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
        switch (gestureName) {
          case SWIPE_LEFT:
            navigation.navigate('Book');
            break;
          case SWIPE_RIGHT:
            navigation.navigate('Home');
            break;
        }
    };
    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };
  return (
    <GestureRecognizer
          onSwipe={(direction, state) => onSwipe(direction, state)}
          config={config}
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
      <Text>Book!</Text>
    </GestureRecognizer>
  );
}