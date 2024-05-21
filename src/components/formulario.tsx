import { Button, Modal, Text } from 'react-native'

export default function Formulario({ modalVisible }) {
    return (
        <Modal
            animationType='slide'
            visible={modalVisible}
        >
            <Text>Desde Modal</Text>
            
        </Modal>
    )
}
