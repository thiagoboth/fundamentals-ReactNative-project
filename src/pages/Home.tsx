import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Platform,
    FlatList,
    StatusBar,
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
    id: string;
    name: string;
    //date?: Date; quando eu coloco interrogação, ele vira opcional;
}

export function Home() {
    //usamos useState ao invés de uma variável let, pois, esse hook re-renderiza a página atuomáticamente;
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [greetings, setGreetings] = useState(''); 

    //handle é usado quando a função é disparada após uma interação do usuário;
    function handleAddNewSkill() {
        const data = { 
            id: String(new Date().getTime()),
            name: newSkill
        }

        setMySkills(oldState => [...oldState, data]);
    }

    function handleRemoveSkill(id: string) {
        setMySkills(oldState => oldState.filter(
            skill => skill.id !== id
        ));
    }

    useEffect(() => {
        const currentHour = new Date().getHours();

        if(currentHour < 12) {
            return setGreetings('Good morning!');
        }
        if(currentHour < 18) {
            return setGreetings('Good afternoon!');
        }
        return setGreetings('Good night!');

    }, [])

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Hello World
            </Text>

            <Text style={styles.greetings}>
                { greetings }
            </Text>

            <TextInput 
                style={styles.input} 
                placeholder='New Skill'
                placeholderTextColor={"#555"}
                onChangeText={setNewSkill}
            />

            <Button 
                title="Add"
                onPress={handleAddNewSkill} 

            />

            <Text style={[styles.title, { marginVertical: 50 }]}>
                My Skills
            </Text>

            <FlatList 
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <SkillCard 
                        skill={item.name} 
                        onPress={() => handleRemoveSkill(item.id)}
                    />
                )}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingVertical: 70,
        paddingHorizontal: 30
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    greetings: {
        color: '#FFF',
    }
})