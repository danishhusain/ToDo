import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import HeaderComp from './HeadComp';
import colors from '../styles/colors';
import { verticalScale } from '../styles/responsiveSize';

const AddTaskCompo = () => {
    const [inputs, setInputs] = React.useState({
        title: '',
        description: ''
    });
    const handleOnchange = (text, input) => {
        setInputs(prevState => ({ ...prevState, [input]: text }));
    };

    // console.log(inputs.title, inputs.description)

    return (
        <View style={{flex:1}}>
            <HeaderComp
                leftText="Note"
                headerStyle={{
                    backgroundColor: colors.blackOpacity15,
                    // height:80,

                }} />
            <View style={{flex:1}}>
                <TextInput
                    placeholder="title"
                    value={inputs.title}
                    onChangeText={(text) => handleOnchange(text, 'title')}
                    style={styles.input}
                />
                <TextInput
                    style={styles.input}
                    value={inputs.description}
                    onChangeText={(text) => handleOnchange(text, 'description')}
                    placeholder='note'
                    autoFocus={true}
                    allowFontScaling={true}
                    multiline={true}
                    textAlignVertical='top'
                    // numberOfLines={verticalScale(38)}
                    // scrollEnabled
                />
              
            </View>
        </View>
    )
}



export default AddTaskCompo

const styles = StyleSheet.create({
    input: {
        margin: 12,
        borderWidth: 1,
        paddingLeft: 10,
        flex:1
    },
})