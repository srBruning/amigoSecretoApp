import React, {useEffect, useContext} from 'react';
import {Container, LoadingIcon} from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Api from '../../Api';

const validaToken = async ()=>{
    const token = await AsyncStorage.getItem('token'); 
    if(token ){
        const json = await Api.checkToken(token);
        console.log(json)
        if(!json.token)return false;
        // salva o token
        await AsyncStorage.setItem('token', json.token);
        return true;
    }
    return false;
}
export default () => {
    
    const navigation = useNavigation();

    useEffect(()=>{
        const checkToken = async  ()=>{

            if( await validaToken()){
                // goto home
                navigation.reset({
                    routes:[{name: 'MainTab'}]
                })
            }else{
                navigation.navigate('SignIn');
            }

        }
        checkToken();
    },[]);
    return (
        <Container>
            <LoadingIcon size='large' color='#FFFFFF' />       
        </Container>
    );
}