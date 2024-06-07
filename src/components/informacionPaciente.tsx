import React from "react";
import { Text, SafeAreaView, View, Pressable, StyleSheet } from "react-native";


export default function InformacionPaciente({ paciente: pacienteObj, setModalPaciente, setPaciente }) {

    const { paciente, propietario, email, telefono, fecha, sintomas } = pacienteObj

    function formatearFecha(fecha) {
        const nuevaFecha = new Date(fecha);
        const opciones = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        return nuevaFecha.toLocaleDateString("es-ES", opciones);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>Información {''}
                <Text style={styles.tituloBold}>Paciente</Text>
            </Text>
            <View>
                <Pressable
                    style={styles.cerrarBtn}
                    onLongPress={() => {
                        setPaciente({})
                        setModalPaciente(false)
                    }}
                >
                    <Text style={styles.cerrarTxt}>X Cerrar</Text>
                </Pressable>
            </View>
            <View
                style={styles.containerPaciente}
            >
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre:</Text>
                    <Text style={styles.valor}>{paciente}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Propietario:</Text>
                    <Text style={styles.valor}>{propietario}</Text>
                </View>
                
                <View style={styles.campo}>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.valor}>{email}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Telefono:</Text>
                    <Text style={styles.valor}>{telefono}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Fecha Alta:</Text>
                    <Text style={styles.valor}>{formatearFecha(fecha)}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Síntomas:</Text>
                    <Text style={styles.valor}>{sintomas}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        backgroundColor: '#F59E0B',
        flex: 1
    },

    titulo: {
        textAlign: 'center',
        fontSize: 30,
        color: '#FFF',
        fontWeight: '600'
    },

    tituloBold: {
        fontWeight: '900'
    },

    cerrarBtn: {
        marginTop: 30,
        backgroundColor: '#E06900',
        marginHorizontal: 30,
        marginVertical: 30,
        padding: 15,
        borderRadius: 10,
    },

    cerrarTxt: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 18,
        textTransform: 'uppercase'
    },

    containerPaciente: {
        backgroundColor: '#FFF',
        marginHorizontal: 30,
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 15,
    },

    campo: {
        marginBottom: 10,
    }, 

    label: {
        textTransform: 'uppercase',
        color: '#374151',
        fontWeight: '900',
        marginBottom: 3,
        fontSize: 12
    }, 

    valor: {
        fontWeight: '600',
        fontSize: 16, 
        color: '#224155'
    }, 
})