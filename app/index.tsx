import { useState } from 'react'
import { Text, View, SafeAreaView, StyleSheet, Button, Pressable, Modal } from "react-native";
import Formulario from '@/src/components/formulario';

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de citas {''}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        style={styles.btnNuevaCita}
      >
        <Text style={styles.textNuevaCita}>Nueva cita</Text>
      </Pressable>

      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },

  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600'
  },

  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9'
  },

  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 20
  },

  textNuevaCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase'
  }

})
