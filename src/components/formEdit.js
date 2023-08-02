import React, { useState } from 'react';
import { TextInput, Button, Text, StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Formik } from 'formik';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';

export default function FormsE({ navigation}){
    const route = useRoute();

    const { idF, nombreI, edadI, fechaN, selFut, selChar } = route.params;

    const[selectedMFution, setSelectedMFution] = useState("¿Pothala o Metamoru?");
    const[selectedMCh, setSelectedMCh] = useState('Nada Aun');

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [datePickerVisible, setDatePickerVisible] = useState(false);


    const showDatePicker = () => {
    setDatePickerVisible(true);
    };

    const hideDatePicker = () => {
    setDatePickerVisible(false);
    };

    const handleConfirm = (date) => {
        //setFieldValue('fechaN', date.toDateString())
        hideDatePicker();
        setSelectedDate(date)
    };

    const handleSubmit = async (values, id) => {
        try {
            const response = await axios.put(`http://192.168.19.231:9000/update-datos/${idF}`, values);
            console.log(response.data);
        } catch (error) {
            console.error('Error al actualizar datos', error);
            console.error('Error de red', error.response);
        }
    }

    //console.log(selectedDate.toDateString());
    console.log(idF);
    return(
        <View style={estilos.container1}>
            <View style={estilos.container}>
                <Formik
                    initialValues={{ nombreI: nombreI, edadI: edadI, fechaN: '' , selFut: selFut, selChar: selChar }}
                    onSubmit={handleSubmit}
                >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                    isValid,
                    setFieldValue,
                    setFieldTouched
                    }) => (
                    <>
                        <Text style={estilos.text}>Formulario sobre Fusiones</Text>
                        <TextInput
                        style={estilos.textI}
                        placeholder='Introduce tu nombre'
                        onChangeText={handleChange('nombreI')}
                        value={values.nombreI}
                        keyboardType="default"
                        />
                        <TextInput
                        style={estilos.textI}
                        placeholder='Introduce tu edad'
                        onChangeText={handleChange('edadI')}
                        value={values.edadI}
                        keyboardType="default"
                        />
                        <Button style={{marginBottom:5}} title="   Selecciona Fecha de nacimiento   " onPress={showDatePicker} />
                        <DateTimePickerModal
                            date={selectedDate}
                            isVisible={datePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                        <TextInput
                        style={estilos.textI}
                        value = {selectedDate.toDateString()}
                        editable = {false}
                        keyboardType="default"
                        />
                        <Text >{values.fechaN = selectedDate.toDateString()}</Text>
                        <Picker
                            selectedValue={selectedMFution}
                            style={estilos.selectF}
                            onValueChange={(itemValue, itemIndex) => {
                                setFieldValue('selFut', itemValue)
                                setSelectedMFution(itemValue)
                            }}
                            prompt='¿Pothala o Metamoru?'
                            >
                                <Picker.Item label="Pothala" value="Pothala"/>
                                <Picker.Item label="Metamoru" value="Metamoru"/>
                        </Picker>
                        <Picker
                            selectedValue={selectedMCh}
                            style={estilos.selectF}
                            onValueChange={(itemValue, itemIndex) => {
                                setFieldValue('selChar', itemValue)
                                setSelectedMCh(itemValue)
                            }}
                            prompt='¿Vegetto o Gogeta?'
                            >
                                <Picker.Item label="Vegetto" value="Vegetto"/>
                                <Picker.Item label="Gogeta" value="Gogeta"/>
                        </Picker>
                        <TouchableOpacity
                            style={estilos.colorBtn}
                            onPress={() => handleSubmit(values, parseInt(idF))}
                        >
                            <Text style={estilos.colorTxtBtn}>Aceptar</Text>
                        </TouchableOpacity>
                    </>
                    )}
                </Formik>
                <Button
                    title='Ir a Consultas'
                    onPress={() => navigation.navigate('Consultas')}
                />
            </View>
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
      marginTop: 20,
    },
    colorBtn: {
      borderWidth: 1,
      borderColor: '#007BFF',
      backgroundColor: '#007BFF',
      padding: 15,
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 7,
      marginBottom: 10,
    }, 
    colorTxtBtn: {
      color: '#FFFFFF',
      fontSize: 20,
      textAlign: 'center'
    },
  });
