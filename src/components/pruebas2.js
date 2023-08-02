import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { Formik } from 'formik';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Pruebas = () => {
  const DatePickerField = ({ field, form }) => {
    const { setFieldValue } = useFormikContext();
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisible(true);
    };

    const hideDatePicker = () => {
      setDatePickerVisible(false);
    };

    const handleConfirm = (date) => {
      hideDatePicker();
      setFieldValue(field.name, date); // Guarda la fecha seleccionada en el campo de Formik
    };

    return (
      <View>
        <Button title="Seleccionar fecha" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    );
  };

  return (
    <Formik
      initialValues={{ fecha: null }} // Inicializa el valor de fecha en null
      onSubmit={values => console.log(values)}
    >
      {({ handleSubmit }) => (
        <View>
          <DatePickerField field={{ name: 'fecha' }} />
          <Button title="Guardar" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default Pruebas;

