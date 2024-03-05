import react, { useEffect, useState, useContext } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { disableBackButton, enableBackButton } from '../../components/BackButtonHandler';
import { Context as AuthContext } from '../../context/AuthContext';
import { Input } from 'react-native-elements';

const AddStudent = ({ navigation }) => {
    const { state, signup, fetchStudentList, clearErrorMessage } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rollNum, setRollNum] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        enableBackButton();

        return () => {
            fetchStudentList();
            clearErrorMessage();
        };
    }, []);




    return (
        <View style={styles.container}>
            <Text style={styles.headText}>New Student </Text>
            <Input
                label="Student Name"
                value={name}
                onChangeText={setName}

                autoCorrect={false}
            />
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input
                label="Roll Number"
                value={rollNum}
                onChangeText={setRollNum}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
            />

            {state.errorMessage ? <Text style={{ color: 'red', textAlign: 'center', marginBottom: 10 }}>{state.errorMessage}</Text> : null}

            <TouchableOpacity onPress={() => { return signup({ name, email, rollNum, password }) }} style={{ backgroundColor: 'blue', padding: 8, borderRadius: 4, width: "90%", alignSelf: 'center' }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>Send</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headText: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center'
    }, textInput: {
        borderWidth: 0.5,
        width: '95%',
        borderRadius: 6, height: 50, alignSelf: 'center'
    }
})
export default AddStudent;