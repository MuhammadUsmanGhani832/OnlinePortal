import React, { useContext, useState } from 'react';
import { View, StyleSheet, TouchableOpacity ,Image,Platform,StatusBar} from 'react-native';
import EmailForm from '../../components/EmailForm'
import { Context as AuthContext } from '../../context/AuthContext'
import { Button, Input } from 'react-native-elements';
import Spacer from '../../components/Spacer';
import { Text } from '@rneui/themed';
import { useFocusEffect } from '@react-navigation/native';
const EnterYourEmail = ({ navigation }) => {
    const { check_email, state, clearErrorMessage } = useContext(AuthContext);
    const [email, setEmail] = useState('');

    useFocusEffect(
        React.useCallback(() => {



            return () => {
                clearErrorMessage();

            };
        }, [])
    );
    return (
        <View style={styles.container}>
            <Image source={require("../../images/no-profile-pic-icon-12.jpg")}style={{width:200,height:200,alignSelf:'center',marginTop:20}}/>
            <Spacer>
                <Text h2 h2Style={{ textAlign: 'center' }}>Portal Login</Text>
                <Text style={{textAlign:'center'}}>Enter Email For Login</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {state.errorMessage ? (
                <Text style={{ color: 'red' }}>{state.errorMessage}</Text>
            ) : null}
            <Spacer />


            <Spacer>
                <Button
                    title={"Enter"}
                    onPress={() => check_email({ email })}
                />
            </Spacer>
            <TouchableOpacity onPress={() => navigation.navigate("AdminSignIn")} style={{position:'absolute',bottom:10,right:10}}><Text>login as Admin</Text></TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    }
});

export default EnterYourEmail;









// <Button
                    //     title="Log in"
                    //     loading={false}
                    //     loadingProps={{ size: 'small', color: 'white' }}
                    //     buttonStyle={{
                    //         backgroundColor: '#14BDAD',
                    //         borderRadius: 5,
                    //     }}
                    //     titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                    //     containerStyle={{

                    //         height: 50,
                    //         width: 300,
                    //         marginVertical: 10,

                    //     }}
                    //     onPress={() => navigation.navigate("Signin")}
                    // />