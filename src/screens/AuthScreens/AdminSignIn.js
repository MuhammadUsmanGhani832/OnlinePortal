import React, { useContext} from 'react';
import { StyleSheet } from 'react-native';
import AuthForm from '../../components/AuthForm';
import { Context as AuthContext } from '../../context/AuthContext';
import { disableBackButton, enableBackButton } from '../../components/BackButtonHandler';
import { useFocusEffect } from '@react-navigation/native';

const AdminSignIn = ({ navigation }) => {
  const { state, admin_signin, clearErrorMessage,} = useContext(AuthContext);
  useFocusEffect(
    React.useCallback(() => {
        enableBackButton();
      return () => {

        disableBackButton();
        // Useful for cleanup functions
      };
    }, [])
  );

    return (
       <>
      <AuthForm
        headerText="Online portal Admin"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={admin_signin}
      />
       </>
    )
}
const styles = StyleSheet.create({
});

export default AdminSignIn;