import React from 'react';
import { 
    Text, 
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export function SkillCard({ skill }) {
    return (
        <TouchableOpacity style={styles.buttonSkill}>
            <Text style={styles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1f1E25',
        padding: 15,
        borderRadius: 50,
        alignItems:'center',
        margin: 10,
    },
    textSkill: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
})