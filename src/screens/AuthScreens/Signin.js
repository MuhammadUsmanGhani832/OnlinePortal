import React, { useContext,useState } from 'react';
import { StyleSheet } from 'react-native';
import AuthForm from '../../components/AuthForm';
import { Context as AuthContext } from '../../context/AuthContext';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../../components/Spacer';

const Home = ({ navigation, route }) => {
  
  const [password, setPassword] = useState('');
  const user = route.params.user;
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

const [email, setEmail] = useState(user.email);
  return (
    <>
      <Spacer>
        <Text h2 h2Style={{ textAlign: "center", marginTop: 10 }}>Enter password</Text>
      </Spacer>
      <Text style={{marginHorizontal:10}}>Welcome: {user.name}</Text>
      
      
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
        <Text style={{color:'red',marginHorizontal:10}}>{state.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={"log in"}
          onPress={() => signin({ email, password })}
        />
      </Spacer>
    </>
  )
}
const styles = StyleSheet.create({
});

export default Home;