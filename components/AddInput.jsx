import { useState } from "react";
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const AddInput = () => {
    const [value, setValue] = useState("");

    const changeText = (task) => {
        setValue(value);
    }

    return (
        <View style={styles.inputWrapper}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Add Task"
                    onChangeText={changeText}
                />
            </View>
            <TouchableOpacity
                onPress={() => {
                    alert('New task added!');
                }}
                style={styles.submitBtn}
            >
                <Text style={{color: '#FFF'}}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputWrapper: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '5%',
        marginTop: 'auto',
        padding: 5,
    },
    inputContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
    },
    submitBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
        backgroundColor: '#355fde',
        borderRadius: 5,
    }
});

export default AddInput;