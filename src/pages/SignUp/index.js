import React, {useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/native'
import {Container, ImgLogo,  H1Label, LinkLabel, BtnArea
} from './styles'
import { Text,  StyleSheet } from 'react-native';
import InputPadrao from '../../components/InputPadrao';
import BtnPrimary from '../../components/BtnPrimary';
import BtnSecondary from '../../components/BtnSecondary';
import Api from '../../Api';

export default () => {
    
    const [usernameField, setUsernameField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSingClike = async () => {
        if(emailField != '' && passwordField != ''){
            json = await Api.signIn(emailField, passwordField);
            if(validaUserResponse(json, userDispatch)){
                // Goto home
                navigation.reset({routes:[{name: 'MainTab'}]})
            }else{
                alert("E-mail e/ou senha invalidos")
            }
        }else{
            alert("Informe email e senha!")
        }
    }
    const handleSingUpClike = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        })
    }

    return (
        <Container>
            <ImgLogo source={require('../../assets/gift_box.png')}
            />
            <H1Label>Login</H1Label>

            <InputPadrao txtLabel="Nome de Usuário" placeholder="Digite seu username"
                    value={usernameField} onChangeText={t=>setUsernameField(t)} />  
            <InputPadrao txtLabel="Senha" placeholder="Digite sua senha" password={true}
                    value={passwordField} onChangeText={t=>setPasswordField(t)} /> 
            
            <LinkLabel>{"Esqueceu sua senha"}?</LinkLabel>
            <BtnArea>
                <BtnPrimary txtLabel="Login" onPress={handleSingClike}></BtnPrimary>   
                <BtnSecondary txtLabel="Registre-se" onPress={handleSingUpClike}></BtnSecondary>        
            </BtnArea>
        </Container>
    );
}

