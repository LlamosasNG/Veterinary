import React, { useState } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";

export default function Paciente({ item }) {
    const { paciente, fecha } = item;

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
        <View style={styles.contenedor}>
            <Text style={styles.label}>Paciente:</Text>
            <Text style={styles.texto}>{paciente}</Text>
            <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>

            <View style={styles.contenedorBtns}>
                <Pressable style={[styles.btn, styles.btnEditar]}>
                    <Text style={styles.btnTexto}>Editar</Text>
                </Pressable>

                <Pressable style={[styles.btn, styles.btnEliminar]}>
                    <Text style={styles.btnTexto}>Eliminar</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: "#FFF",
        padding: 20,
        borderBottomColor: "94A3B8",
        borderBottomWidth: 1,
    },

    label: {
        color: "#374151",
        textTransform: "uppercase",
        fontWeight: "700",
        marginBottom: 10,
    },

    texto: {
        color: "#6D28D9",
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 10,
    },

    fecha: {
        color: "#374151",
    },

    contenedorBtns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },

    btn: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
    },

    btnEditar: {
        backgroundColor: '#F59E0B'
    },

    btnEliminar: {
        backgroundColor: '#EF4444'
    },

    btnTexto: {
        textTransform: 'uppercase',
        fontWeight: '900',
        fontSize: 12,
        color: '#FFF'
    }

});
