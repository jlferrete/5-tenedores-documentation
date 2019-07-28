import React from 'react';
import { StyleSheet, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

export default (inputTemplate = locals => {
    return (
        <View style={styles.view}>
            <Input
                placeholder={locals.config.placeholder}
                password={locals.config.password}
                secureTextEntry={locals.config.password}
                leftIcon={{
                    type: locals.config.iconType,
                    name: locals.config.iconName
                }}
                leftIconContainerStyle={styles.iconContainer}
                onChangeText={v => locals.onChange(v)}
            />
        </View>
    )
});

const styles = StyleSheet.create({
    view: {
        marginBottom: 40,
    },
    iconContainer: {
        paddingRight: 20,
    }
});