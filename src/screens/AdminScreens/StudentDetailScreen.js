import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Context as AuthContext } from '../../context/AuthContext';
import { Context as CourseContext } from '../../context/CourseContext';


const StudentDetailScreen = ({ navigation, route }) => {
    const { state, signout, oneStudentById, removeStudent } = useContext(AuthContext);
    const { myState, fetchSubjects } = useContext(CourseContext);
    const stName = route.params.name;
    const stEmail = route.params.email;
    const stRollNum = route.params.rollNum;
    const id = route.params.id;
    function callback() {
        navigation.goBack();
    }
    return (<View style={{ flex: 1 }}>
        <Text style={{ textAlign: 'center', borderBottomWidth: 0.5 }}>{stEmail} - ({stRollNum})</Text>
        <View style={{ flex: 1, marginBottom: 60, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', paddingTop: 15 }}>

            <TouchableOpacity style={{ width: 150, height: 150, marginBottom: 15, borderRadius: 5, borderWidth: 0.5, shadowColor: 'green', justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                    fetchSubjects({ id });
                    navigation.navigate("StudentTranscript", { email: stEmail, name: stName, rollNum: stRollNum, id });
                }}

            >
                <MaterialCommunityIcons name="google-classroom" size={44} color="black" />
                <Text>Student Transcript</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 150, height: 150, marginBottom: 15, borderRadius: 5, borderWidth: 0.5, shadowColor: 'green', justifyContent: 'center', alignItems: 'center' }}
                onPress={() => { removeStudent({ id, callback }) }}

            >
                <Entypo name="remove-user" size={40} color="black" />
                <Text>Remove Student</Text>
            </TouchableOpacity>



        </View>
    </View>)
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 10
    }, view: {
        backgroundColor: 'white',
        marginVertical: 10,
        height: 50,
        width: '80%', borderRadius: 6, borderWidth: 0.5,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            },
        }),
    }
});

export default StudentDetailScreen;