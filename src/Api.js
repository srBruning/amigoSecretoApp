import AsyncStorage from '@react-native-async-storage/async-storage';
import { add } from 'react-native-reanimated'; 

// const BASE_API ="localhost:3636";
// const BASE_API ="http://am.diegobruning.com";
const BASE_API ="http://159.65.42.197:3636";

const doPost =  async (body, path, token) => {
    const reqParam={
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': token
        },
        body: JSON.stringify(body) 
    };
    const resp = await fetch(`${BASE_API}${path}`, reqParam);
    console.log("Response: ", resp);
    if(resp.json){
        const json = await resp.json();
        console.log("status: "+resp.status);
        return json;
    }
    return 
}

const doGet =  async (path, token) => {
    const reqParam={
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': token
        },
    };
    const resp = await fetch(`${BASE_API}${path}`, reqParam);
    console.log("Response: ", resp);
    if(resp.json){
        const json = await resp.json();
        console.log("status: "+resp.status);
        return json;
    }
    return 
}

export default {
    checkToken: async (token) => {     
        return await doGet('/api/auth/refresh', token);
    },
    signIn: async (user_name, password) => {
        return  await doPost({user_name, password}, '/api/singin');
    },
    logout: async (email, password) => {
        const token = await AsyncStorage.getItem('token');
        return  await doPost({token}, '/api/auth/logout');
    },
    signUp: async (name, email, password) => {
        return await doPost({name, email, password}, '/api/user');
    },
  

};