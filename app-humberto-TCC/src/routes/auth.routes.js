import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login'
import CadastroUsuario from '../pages/Cadastro';

const AuthStack = createStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator screenOptions={{
            headerShown: false // aqui definimos headerShown como false para todas as telas
        }}>
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Cadastrar Usuario" component={CadastroUsuario} />
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;