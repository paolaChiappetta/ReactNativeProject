import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        paddingVertical: 20,
      },
      modalTitle: {
        fontSize: 16
      },
      modalMessageContainer : {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
      },
      modalMessage: {
        fontSize: 14,
      },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 20,
    }
})