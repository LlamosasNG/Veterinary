import React, { useState } from 'react'
import { Text, SafeAreaView, StyleSheet, Pressable, FlatList, Alert, Modal } from "react-native";
import Formulario from '@/src/components/formulario';
import Paciente from '@/src/components/paciente';
import InformacionPaciente from '@/src/components/informacionPaciente';

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalPaciente, setModalPaciente] = useState(false)
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})


  function pacienteEditar(id) {
    const pacienteEditar = pacientes.filter(paciente => paciente.id === id)
    setPaciente(pacienteEditar[0])
  }

  function pacienteEliminar(id) {
    Alert.alert(
      '¿Deseas eliminar este paciente?',
      'Un paciente eliminado no se puede recuperar',
      [
        { text: 'Cancelar' },
        {
          text: 'Si, eliminar', onPress: () => {
            const pacientesActualizados = pacientes.filter(pacientesState => pacientesState.id !== id)
            setPacientes(pacientesActualizados)
          }
        }
      ]
    )
  }

  function cerrarModal() {
    setModalVisible(false)
  }

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

      {pacientes.length === 0 ?
        <Text style={styles.sinPacientes}>No hay pacientes aún</Text> :
        <FlatList
          style={styles.listado}
          data={pacientes}
          keyExtractor={item => item.id}

          renderItem={({ item }) => {
            return (
              <Paciente
                item={item}
                setPaciente={setPaciente}
                setModalVisible={setModalVisible}
                pacienteEditar={pacienteEditar}
                pacienteEliminar={pacienteEliminar}
                setModalPaciente={setModalPaciente}
              />
            )
          }}
        />
      }

      {modalVisible && (
        <Formulario
          modalVisible={modalVisible}
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          cerrarModal={cerrarModal}
        />
      )}

      <Modal
        visible={modalPaciente}
        animationType='fade'
      >
        <InformacionPaciente
          paciente={paciente}
          setPaciente={setPaciente}
          setModalPaciente={setModalPaciente}
        />
      </Modal>

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
  },

  listado: {
    marginTop: 50,
    marginHorizontal: 30
  }
})
