import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    homeContainer: {
        padding:24,
        backgroundColor: 'coral',
        flex: 1
    },
    reviewDetailscontainer: {
        flex: 1,
        padding:24,
        backgroundColor: '#7777',
    },
    aboutContainer: {
        flex: 1,
        padding:20,
        backgroundColor: '#7777',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paragraph : {
        marginVertical: 8,
        lineHeight: 20
    }
})