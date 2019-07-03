import React from 'react';
import { StyleSheet, Button } from 'react-native';

export default props => (
    <Button 
        style={styles.comando} 
        title='Calcular'
        onPress={props.acao}
    />
);

const styles = StyleSheet.create({
    comando: {
        height: 50,
        fontSize: 24,
    },
});
