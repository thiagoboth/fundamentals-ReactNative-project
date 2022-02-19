import React from 'react';
import { 
    Text, 
    TouchableOpacity,
    TouchableOpacityProps,
    StyleSheet,
} from 'react-native';

//aqui estou falando que ButtonProps tem todas as propriedades de um TouchableOpacity;
//e estou adicionando a propriedade title ainda por cima;
interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

//como ButtonProps tem todas as propriedades do TO, eu faço a props receber ele, que posso passar com spread no proprio componente;
export function Button({ title, ...rest } : ButtonProps) {
    return (
        <TouchableOpacity 
                style={styles.button}
                activeOpacity={.7}
                {...rest}
            >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color:'white',
        fontSize: 17,
        fontWeight: 'bold'
    },
})