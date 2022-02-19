import React from 'react';
import { 
    Text, 
    TouchableOpacity,
    TouchableOpacityProps,
    StyleSheet,
} from 'react-native';

//Mesma coisa que no componente Button;
interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
}

export function SkillCard({ skill, ...rest } : SkillCardProps) {
    return (
        <TouchableOpacity 
            style={styles.buttonSkill}
            {...rest}
        >
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