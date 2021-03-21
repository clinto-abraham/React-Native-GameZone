import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About({ navigation }) {
    const pressHomeHandler = () => {
        navigation.goBack();
    }
    const pressReviewHandler = () => {
        navigation.navigate('ReviewDetails');

    }
    return (
        <React.Fragment>
            <View style={globalStyles.aboutContainer}>
                <Button title='< Home' onPress={pressHomeHandler} />
                <Text>About</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum quisque non tellus orci ac auctor augue mauris augue. Morbi tincidunt ornare massa eget egestas purus viverra accumsan. Orci a scelerisque purus semper eget duis at tellus at. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Vestibulum lectus mauris ultrices eros. Purus sit amet luctus venenatis lectus magna. Enim tortor at auctor urna nunc id cursus. Cursus eget nunc scelerisque viverra mauris in aliquam.</Text>
                <Button title='Reviews >' onPress={pressReviewHandler} />
            </View>
        </React.Fragment>
    )
}