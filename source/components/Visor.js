import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default props => (
    <View>
        <TextInput 
            style={styles.visor} 
            placeholder='Resultado' 
            value={props.resultado} 
        />
    </View>
);

const styles = StyleSheet.create({
    visor: {
        height: 100,
        fontSize: 30,
    },
});
