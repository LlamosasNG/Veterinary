import React, { useState } from 'react'
import { Text, SafeAreaView, StyleSheet, Pressable, FlatList } from "react-native";
import Formulario from '@/src/components/formulario';
import Paciente from '@/src/components/paciente';

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false)
  const [pacientes, setPacientes] = useState([])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de citas {''}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable
        onPressIn={() => setModalVisible(!modalVisible)}
        style={styles.btnNuevaCita}
      >
        <Text style={styles.textNuevaCita}>Nueva cita</Text>
      </Pressable>

      {pacientes.length === 0 ?
        <Text style={styles.sinPacientes}>No hay pacientes aún</Text> :
        <FlatList
          data={pacientes}
          keyExtractor={item => item.id}

          renderItem={(item) => {
            return (
              <Paciente
                item={item}
              />
            )
          }}
        />
      }

      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        pacientes={pacientes}
        setPacientes={setPacientes}
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
  },

  sinPacientes: {
    marginTop: 40,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 24
  }

})
