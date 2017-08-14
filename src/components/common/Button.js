import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle } = styles;
    return(
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            {children}
        </TouchableOpacity>
    );
};

    const styles = {
        buttonStyle: {
            flex: 1,
            alignSelf: 'stretch',
            backgroundColor: '#fff',
            borderColor: '#007aff',
            borderWidth: 1,
            borderRadius: 5,
            marginLeft: 5,
            marginRight: 5,
            paddingTop: 10,
            paddingBottom: 10,
            justifyContent: 'center',
            alignItems: 'center',
        },
    };

export { Button };
