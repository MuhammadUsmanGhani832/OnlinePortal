import React, { useContext,useState } from 'react';
import { StyleSheet } from 'react-native';
import AuthForm from '../../components/AuthForm';
import { Context as AuthContext } from '../../context/AuthContext';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../../components/Spacer';

const TeacherLogin = ({ navigation, route }) => {
  
  const [password, setPassword] = useState('');
  const user = route.params.user;
  const { state, teacher_signin, clearErrorMessage } = useContext(AuthContext);

const [email, setEmail] = useState(user.email);
  return (
    <>
      <Spacer>
        <Text h2 h2Style={{ textAlign: "center", marginTop: 10 }}>Enter password</Text>
      </Spacer>
      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {state.errorMessage!=='' ? (
        <Text style={{color:'red'}}>{state.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={"log in"}
          onPress={() => teacher_signin({ email, password })}
        />
      </Spacer>
    </>
  )
}
const styles = StyleSheet.create({
});

export default TeacherLogin;









// import React, { useContext} from 'react';
// import { StyleSheet } from 'react-native';
// import AuthForm from '../../components/AuthForm';
// import { Context as AuthContext } from '../../context/AuthContext';

// const TeacherLogin = ({ navigation }) => {
  

//     const { state, teacher_signin, clearErrorMessage,} = useContext(AuthContext);
//     return (
//        <>
//       <AuthForm
//         headerText="Teacher Login"
//         errorMessage={state.errorMessage}
//         submitButtonText="Sign In as Teacher"
//         onSubmit={teacher_signin}
//       />
//        </>
//     )
// }
// const styles = StyleSheet.create({
// });

// export default TeacherLogin;