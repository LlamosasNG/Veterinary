import React, { useState, useEffect } from 'react'
import { Modal, Text, StyleSheet, SafeAreaView, View, TextInput, ScrollView, Pressable, Alert } from 'react-native'
import DatePicker from '@dietime/react-native-date-picker';


export default function Formulario({
    modalVisible,
    cerrarModal,
    pacientes,
    setPacientes,
    paciente: pacienteObj,
    setPaciente: setPacienteIndex,
}) {

    const [id, setId] = useState('')
    const [paciente, setPaciente] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [fecha, setFecha] = useState(new Date())
    const [sintomas, setSintomas] = useState('')

    useEffect(() => {
        if (Object.keys(pacienteObj).length > 0) {
            setId(pacienteObj.id)
            setPaciente(pacienteObj.paciente)
            setPropietario(pacienteObj.propietario)
            setEmail(pacienteObj.email)
            setTelefono(pacienteObj.telefono)
            setFecha(pacienteObj.fecha)
            setSintomas(pacienteObj.sintomas)
        }
    }, [pacienteObj])

    function handleCita() {
        if ([paciente, propietario, email, fecha, sintomas].includes('')) {
            Alert.alert(
                'Error',
                'Todos los campos son obligatorios'
            )
            return;
        }

        const nuevoPaciente = {
            paciente,
            propietario,
            email,
            telefono,
            fecha,
            sintomas
        }

        // Revisar si es un registro nuevo o es edición de uno ya creado
        if (id) {
            // Editando
            nuevoPaciente.id = id

            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === nuevoPaciente.id ?
                nuevoPaciente :
                pacienteState
            )
            setPacientes(pacientesActualizados)
            setPacienteIndex({})

        } else {
            // Nuevo registro
            nuevoPaciente.id = Date.now()
            setPacientes([...pacientes, nuevoPaciente])
        }

        cerrarModal()

        setId('')
        setPaciente('')
        setPropietario('')
        setEmail('')
        setTelefono('')
        setFecha(new Date())
        setSintomas('')
    }

    return (
        <Modal
            animationType='slide'
            visible={modalVisible}
        >
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Text style={styles.titulo}>
                        {pacienteObj.id ? 'Editar' : 'Nueva'} {''}
                        <Text style={styles.tituloBold}>Cita</Text>
                    </Text>

                    <Pressable
                        style={styles.cancelarBtn}
                        onLongPress={() => {
                            cerrarModal()
                            setPacienteIndex({})
                            setPaciente('')
                            setPropietario('')
                            setEmail('')
                            setTelefono('')
                            setFecha(new Date())
                            setSintomas('')
                        }}
                    >
                        <Text style={styles.cancelarTxt}>X Cancelar</Text>
                    </Pressable>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre paciente</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType='default'
                            placeholder='Nombre paciente'
                            placeholderTextColor={'#666'}
                            value={paciente}
                            onChangeText={setPaciente}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre propietario</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType='default'
                            placeholder='Nombre propietario'
                            placeholderTextColor={'#666'}
                            value={propietario}
                            onChangeText={setPropietario}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Correo electrónico</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType='email-address'
                            placeholder='Email'
                            placeholderTextColor={'#666'}
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Número teléfonico</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType='number-pad'
                            placeholder='Teléfono'
                            placeholderTextColor={'#666'}
                            maxLength={10}
                            value={telefono}
                            onChangeText={setTelefono}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Fecha alta</Text>

                        <View style={styles.containerFecha}>
                            <DatePicker
                                value={fecha}
                                onChange={date => setFecha(date)}
                                format="dd-mm-yyyy"
                            />
                        </View>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Síntomas</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType='default'
                            placeholder='Síntomas'
                            placeholderTextColor={'#666'}
                            multiline={true}
                            numberOfLines={4}
                            value={sintomas}
                            onChangeText={setSintomas}
                        />
                    </View>

                    <Pressable
                        style={styles.nuevaCitaBtn}
                        onPress={handleCita}
                    >
                        <Text style={styles.nuevaCitaText}> {pacienteObj.id ? 'Editar' : 'Agregar'} paciente</Text>
                    </Pressable>

                </ScrollView>
            </SafeAreaView>
        </Modal >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6D28D9',
        flex: 1,
    },

    titulo: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
        color: '#FFF'
    },

    tituloBold: {
        fontWeight: '900',
    },

    input: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
    },

    label: {
        color: '#FFF',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600'
    },

    campo: {
        marginTop: 10,
        marginHorizontal: 30,
    },

    containerFecha: {
        backgroundColor: '#FFF',
        borderRadius: 10,
    },

    cancelarBtn: {
        marginTop: 30,
        backgroundColor: '#5827A4',
        marginHorizontal: 30,
        marginVertical: 30,
        padding: 20,
        borderRadius: 10
    },

    cancelarTxt: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase'
    },

    nuevaCitaBtn: {
        marginVertical: 50,
        backgroundColor: '#F59E0B',
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 10
    },

    nuevaCitaText: {
        color: '#5827A4',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase'
    }
})
