import React, { useEffect, useState, useContext } from 'react';
import {View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import axios from 'axios';
import { DataTable } from 'react-native-paper';
import FormsE from './formEdit';

export default function TablaFutions({ navigation }){
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const obtainData = async () => {
            try{
            const response = await axios.get('http://192.168.19.231:9000/obtenerD');
            setDatos(response.data);
            } catch(error){
                console.error('Error al obtener los datos', error);
                console.error('Error de red', error.response);

            }
        };

        obtainData();
    }, []);

    return(
        <View style={estilos.container1}>
            <ScrollView>
            <View style={estilos.containerTable}>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title textStyle={estilos.textT}>ID</DataTable.Title>
                        <DataTable.Title textStyle={estilos.textT}>Nombre</DataTable.Title>
                        <DataTable.Title textStyle={estilos.textT}>Edad</DataTable.Title>
                        <DataTable.Title textStyle={estilos.textT}>Fecha Nac.</DataTable.Title>
                        <DataTable.Title textStyle={estilos.textT}>Fusion</DataTable.Title>
                        <DataTable.Title textStyle={estilos.textT}>Guerrero</DataTable.Title>
                        <DataTable.Title textStyle={estilos.textT}></DataTable.Title>      
                    </DataTable.Header>
                    {datos.map((dato) => (
                        <DataTable.Row key={dato.idF} style={estilos.row}>
                            <DataTable.Cell>{dato.idF}</DataTable.Cell>
                            <DataTable.Cell style={estilos.cell}>{dato.nombreI}</DataTable.Cell>
                            <DataTable.Cell>{dato.edadI}</DataTable.Cell>
                            <DataTable.Cell>{dato.fechaN}</DataTable.Cell>
                            <DataTable.Cell>{dato.selFut}</DataTable.Cell>
                            <DataTable.Cell>{dato.selChar}</DataTable.Cell>
                            <DataTable.Cell onPress={() => navigation.navigate('FormEdi', dato)}>Editar</DataTable.Cell>
                        </DataTable.Row>
                    ))}
                </DataTable>
            </View>
            </ScrollView>
                <Button 
                    title="Volver"
                    onPress={() => navigation.navigate('Formulario')}
                />
            
        </View>
    );
}

const estilos = StyleSheet.create({
    container1: {
      flex: 1,
      backgroundColor: '#0e4c75',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerTable: {
      backgroundColor: '#0e4c75',
      alignItems: 'center',
      width: 700,
      height: 'auto',
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 12},
      shadowOpacity: 0.48,
      shadowRadius: 11.95,
      elevation: 18,
      backgroundColor: '#3282b5',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cell: {
      flex: 1,
      flexWrap: 'wrap',
      height: 'auto',
      overflow: 'visible',
      justifyContent: 'center',
      textOverflow: 'clip',
      whiteSpace: 'normal',
    },
    row: {
      flex: 1,
      flexWrap: 'wrap', 
      paddingLeft: 1, 
    },
    container: {
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 12},
      shadowOpacity: 0.48,
      shadowRadius: 11.95,
      elevation: 18,
      position: 'relative',
      width: 350,
      height: 'auto',
      backgroundColor: '#3282b5',
      alignItems: 'center',
      padding: 30,
      paddingBottom: 60,
      //paddingTop: 30,
    },
    text: {
      fontSize: 28,
      textAlign: 'center',
      color: '#b2e3fa',
      fontWeight: 500,
      marginBottom: 30,
      //fontFamily: 'Arial'
    },
    textT: {
      fontSize: 14,
      fontWeight: 200,
      color: '#b2e3fa'
    },
    textI: {
      fontSize: 16,
      width: 280,
      height: 40,
      backgroundColor: 'white',
      marginBottom: 15,
      marginTop: 10,
    },
    selectF: {
      fontSize: 16,
      width: 280,
      height: 40,
      backgroundColor: 'white',
      marginBottom: 15
    },
    button1: {
      backgroundColor: '#b2e3fa',
      width: 280,
      marginBottom: 15,
    },
    colorBtn: {
      borderWidth: 1,
      borderColor: '#007BFF',
      backgroundColor: '#007BFF',
      padding: 15,
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 7,
    }, 
    colorTxtBtn: {
      color: '#FFFFFF',
      fontSize: 20,
      textAlign: 'center'
    },
  });
  