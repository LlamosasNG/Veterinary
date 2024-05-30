import React from "react";
import { Text, SafeAreaView, View, Pressable, StyleSheet } from "react-native";


export default function InformacionPaciente({ paciente: pacienteObj, setModalPaciente }) {

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
                    onLongPress={() => setModalPaciente(false)}
                >
                    <Text style={styles.cerrarTxt}>X Cerrar</Text>
                </Pressable>
            </View>
            <View
                style={styles.containerPaciente}
            >
                <View>
                    <Text>Nombre: </Text>
                    <Text>{paciente}</Text>
                </View>

                <View>
                    <Text>Propietario: </Text>
                    <Text>{propietario}</Text>
                </View>

                <View>
                    <Text>Email: </Text>
                    <Text>{email}</Text>
                </View>

                <View>
                    <Text>Telefono: </Text>
                    <Text>{telefono}</Text>
                </View>

                <View>
                    <Text>Fecha Alta: </Text>
                    <Text>{formatearFecha(fecha)}</Text>
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
        padding: 10,
        height: 300,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
    }

})