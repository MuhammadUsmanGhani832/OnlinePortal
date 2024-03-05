import { Button } from '@rneui/base';
import React,{useContext} from 'react';
import { Entypo } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as AuthContext } from '../../context/AuthContext';
import { disableBackButton, enableBackButton } from '../../components/BackButtonHandler'
import { useFocusEffect } from '@react-navigation/native';
const TeacherDetailScreen = ({ navigation, route }) => {
    const { state, signout, oneStudentById, removeTeacher } = useContext(AuthContext);
    const stName = route.params.name;
    const stEmail = route.params.email;
    const id = route.params.id;
    useFocusEffect(
        React.useCallback(() => {
    
            enableBackButton();
           
    
          return () => {
    
            
            // Useful for cleanup functions
    
          };
        }, [])
      );
function callback(){
    navigation.goBack();
}
    return (
        <View style={{ flex: 1}}>
            
           <Text style={{fontSize:20,}}>Teacher Name: </Text>
            <Text >{stName}</Text>
           <Text style={{fontSize:20}}>Teacher email: </Text>
           <Text style={{borderBottomWidth:0.5}}>{stEmail}</Text>
           <TouchableOpacity style={{ width: 150, height: 150, marginBottom: 15, borderRadius: 5, borderWidth: 0.5, shadowColor: 'green', justifyContent: 'center', alignItems: 'center',alignSelf:'center',position:'relative',bottom:-20 }}
                onPress={() => { removeTeacher({ id, callback }) }}

            >
                <Entypo name="remove-user" size={40} color="black" />
                <Text>Remove Teacher</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
   
});

export default TeacherDetailScreen;