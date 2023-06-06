import {Image, Text, TextInput, View} from "react-native";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {useNavigation} from "@react-navigation/native";
import {LIVRES, CATEGORIES as CATEGORY_LIST} from "../../models/data";
import {useState} from "react";


export default function BookScreen() {
    const BOOKS = LIVRES
    const CATEGORIES = [CATEGORY_LIST]
    const navigation = useNavigation();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredBooks = BOOKS.filter((livre) => {
        const title = livre.titre.toLowerCase();
        return title.includes(searchTerm.toLowerCase());
    });

    const onSwipe = (gestureName, gestureState) => {
        const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
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
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        >
            <Text>Books!</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10, paddingHorizontal: 10 }}
                placeholder="Search books..."
                value={searchTerm}
                onChangeText={setSearchTerm}
              />
            <View>
                {filteredBooks.map((livre) => { // Remove index
                    return (
                        <View key={livre.id} style={{padding: 5}}>
                            <Image source={{uri: livre.imageUrl}} style={{width: 50, height: 50}}/>
                            <Text>{livre.titre}</Text>
                        </View>
                    );
                })}
            </View>
        </GestureRecognizer>
    );
}