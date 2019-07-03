import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default props => (
    <View>
        <TextInput 
            value={props.num}
            style={styles.numero}
            onChangeText={valorDoCampo => 
                props.atualizaValor(props.nome, valorDoCampo)}
        />
    </View>
);

const styles = StyleSheet.create({
    numero: {
        width: 140,
        height: 80,
        fontSize: 20,
    },
});
