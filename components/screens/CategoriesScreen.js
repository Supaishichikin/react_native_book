import {Text} from "react-native";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {useNavigation} from "@react-navigation/native";

export default function CategoriesScreen() {
    const navigation = useNavigation();
    const onSwipe = (gestureName, gestureState) => {
        const {SWIPE_RIGHT} = swipeDirections;
        if (gestureName === SWIPE_RIGHT) {
            navigation.navigate('Book');
        }
    }
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
            <Text>Categories!</Text>
        </GestureRecognizer>
    );
}