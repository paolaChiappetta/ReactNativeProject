import React from "react";
import CustomModal from '../modal/CustomModal';
import { View, Text, Button } from "react-native";
import { styles } from "./styles";

const DeleteTaskModal = ({modalVisible, setModalVisible, selectedTask, setSelectedTask, setTasks, tasks}) => {
    
    const onHandleDeleteItem = (id) => {
        setTasks(tasks.filter((item) => item.id !== id));
        setSelectedTask(null);
        setModalVisible(!modalVisible);
    }

    return (
        <CustomModal animationType='slide' visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Detalle de la lista</Text>
        </View>
        <View style={styles.modalMessageContainer}> 
          <Text style={styles.modalMessage}>¿Estas seguro de que quieres eliminar?</Text>
        </View>
        <View style={styles.modalMessageContainer}> 
          <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            title='Eliminar'
            onPress={() => onHandleDeleteItem(selectedTask?.id)}
            color='#3A9DF3'
          />
          <Button 
            title='Cancelar'
            onPress={() => setModalVisible(!modalVisible)}
            color='#cccccc'
          />
        </View>
      </CustomModal>
    )
}

export default DeleteTaskModal;