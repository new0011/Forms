import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TablaFutions from './src/components/consultas';
import Forms from './src/components/formulario';
import FormsE from './src/components/formEdit';

const Stack = createStackNavigator();

export default function AppNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Formulario" component={Forms} />
            <Stack.Screen name="Consultas" component={TablaFutions} />
            <Stack.Screen name="FormEdi" component={FormsE} />

        </Stack.Navigator>
    );
}