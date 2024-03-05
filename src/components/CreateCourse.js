import React, { useState } from 'react';
import { StyleSheet, View, TextInput,ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Text } from 'react-native-elements';

const CreateCourse = ({ onSubmit, submitButtonText, _course_name, _course_description, _instructor_name, _schedule, _location, _available_seats }) => {

  const [course_name, setCourse_name] = useState('');
  const [course_description, setCourse_description] = useState('');
  const [instructor_name, setInstructor_name] = useState('');
  const [schedule, setSchedule] = useState('');
  const [location, setLocation] = useState('');
  const [available_seats, setAvailable_seats] = useState(0);

  return (

    <ScrollView>
      <Text style={styles.text}>{_course_name}</Text>

      <TextInput style={styles.textInput} onChangeText={(newtext) => setCourse_name(newtext)}
        placeholder='eg. Software engineering'  autoCapitalize="words"
        autoCorrect={false}></TextInput>

      <Text style={styles.text}>{_course_description}</Text>
      <TextInput style={styles.textInput} onChangeText={(newtext) => setCourse_description(newtext)}
        placeholder='eg. BSSE-8' autocapitalize="characters" />

      <Text style={styles.text}>{_instructor_name}</Text>
      <TextInput style={styles.textInput} onChangeText={(newtext) => setInstructor_name(newtext)}
        placeholder='eg. sir name'  autocapitalize="characters" autoCorrect={false}
      />

      <Text style={styles.text}>{_schedule}</Text>
      <TextInput style={styles.textInput} onChangeText={(newtext) => setSchedule(newtext)}
        placeholder='eg. Monday - Friday (2pm)' autocapitalize="characters" autoCorrect={false}
      />

      <Text style={styles.text}>{_location}</Text>
      <TextInput style={styles.textInput} onChangeText={(newtext) => setLocation(newtext)}
        placeholder='Online ...' autocapitalize="none" autoCorrect={false}
      />

      <Text style={styles.text}>{_available_seats}</Text>
      
      <TextInput style={styles.textInput} onChangeText={(newtext) => setAvailable_seats(newtext)}
        placeholder='eg. 60'  keyboardType={'numeric'} autoCorrect={false}
      />

      

      <Button onPress={() => onSubmit({ course_name, course_description, instructor_name, schedule, location, available_seats })}
        title={`${submitButtonText}`}
        buttonStyle={{
          backgroundColor: '#1ABC9C',
          borderRadius: 3,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
    </ScrollView>


  );
};

const styles = StyleSheet.create({

  text: {
    fontSize: 18,
    fontWeight: 'bold'
  },textInput:{
    backgroundColor:'#d3d3d3',paddingHorizontal:5,height:50,marginHorizontal:5,borderRadius:5
  }

});

export default CreateCourse;
