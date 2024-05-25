import React, { useState } from 'react'
import { Text } from 'react-native'

export default function Paciente({item}) {
    const { paciente, fecha } = item
    console.log(paciente)
    return (
        <Text>{paciente}</Text>
    )
}