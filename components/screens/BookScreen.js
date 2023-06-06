import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {LIVRES, CATEGORIES} from "../../models/data";
import {useNavigation} from "@react-navigation/native";

const BookScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const filteredBooks = LIVRES.filter((livre) => {
        const title = livre.titre.toLowerCase();
        const categoryMatch = selectedCategory ? livre.categorieId.includes(selectedCategory) : true;
        return title.includes(searchQuery.toLowerCase()) && categoryMatch;
    });

    const navigation = useNavigation();
    const onSwipe = (gestureName) => {
        const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        switch (gestureName) {
            case SWIPE_LEFT:
                navigation.navigate('Categories');
                break;
            case SWIPE_RIGHT:
                navigation.navigate('Home');
                break;
        }
    };

    const handleCategorySelection = (category) => {
        if (selectedCategory === category) {
          setSelectedCategory(''); // Toggle off the selected category
        } else {
          setSelectedCategory(category);
        }
   };

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 30,
    };

    return (
        <GestureRecognizer
            onSwipe={onSwipe}
            config={config}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        >
            <Text>Books!</Text>
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10, paddingHorizontal: 10}}
                placeholder="Search books..."
                value={searchQuery}
                onChangeText={setSearchQuery}
            />
            <View style={{flexDirection: 'row', marginTop: 10}}>
                {CATEGORIES.map((category) => (
                    <TouchableOpacity
                        key={category.id}
                        style={{
                            padding: 5,
                            backgroundColor: selectedCategory === category.id ? 'gray' : 'lightgray',
                            borderRadius: 5,
                            marginRight: 10,
                        }}
                        onPress={() => handleCategorySelection(category.id)}
                    >
                        <Text>{category.genre}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View>
                {filteredBooks.map((livre) => (
                    <View key={livre.id} style={{padding: 5}}>
                        <Image source={{uri: livre.imageUrl}} style={{width: 50, height: 50}}/>
                        <Text>{livre.titre}</Text>
                    </View>
                ))}
            </View>
        </GestureRecognizer>
    );
};

export default BookScreen;
