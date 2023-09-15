import React, { useEffect, useState } from "react";
import { Text, Platform, KeyboardAvoidingView, SafeAreaView, ScrollView, TextInput, Alert, StyleSheet } from "react-native";
import { actions, RichEditor, RichToolbar } from "react-native-pell-rich-editor";
import ImagePicker from 'react-native-image-crop-picker';
import ImgToBase64 from 'react-native-image-base64';
import HeaderComp from "./HeadComp";
import colors from "../styles/colors";
import { moderateScale, scale, verticalScale } from "../styles/responsiveSize";
import { showError, showSuccess } from "../utils/helperFunctions";
import { useDispatch, useSelector } from "../redux/hooks";
import { descriptionData, titleData, titleDiscriptionData, updateMethod, } from "../redux/reducers/notesSlice";
import { useNavigation, useRoute } from "@react-navigation/native";


const handleHead = ({ tintColor }) => <Text style={{ color: tintColor }}>H1</Text>
const AddTaskCompo = ({ route }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [showDescError, setShowDescError] = useState(false);
    const [indexToUpdate, setIndexToUpdate] = useState('');

    const dispatch = useDispatch()
    const notesData = useSelector((state) => state.notesSlice.titleDiscriptionDataState)

    const navigation = useNavigation()
    const richText = React.useRef();
    const index = route.params;


    //convert index Obj to String 
    useEffect(() => {
        if (index) {
            const indexString = Object.values(index).toString()
            setIndexToUpdate(indexString)

            const setTitleFetchedData = notesData[indexString].titleObj
            const setDescriptionFetchedData = notesData[indexString].descriptionObj
            setTitle(setTitleFetchedData,)
            setDescription(setDescriptionFetchedData,)

        } else {
            console.log("nodata")
        }
    }, [index])


    const submitContentHandle = () => {

        //validate description
        const replaceHTMLDescription = description.replace(/<(.|\n)*?>/g, "").trim();
        const replaceWhiteSpaceDescription = replaceHTMLDescription.replace(/&nbsp;/g, "").trim();

        //validate description
        const replaceHTMLTitle = title.replace(/<(.|\n)*?>/g, "").trim();
        const replaceWhiteSpaceTitle = replaceHTMLTitle.replace(/&nbsp;/g, "").trim();

        //check title and decription is not be empty
        if (replaceWhiteSpaceDescription.length <= 0) {
            showError(" Your content shouldn't be empty 🤔")
        } else if (replaceWhiteSpaceTitle.length <= 0) {
            showError(`please input 🤔 Title`)
        } else {
            {
                indexToUpdate ? dispatch(updateMethod({ index: indexToUpdate, titleObj: replaceHTMLTitle, descriptionObj: replaceHTMLDescription }))
                    :
                    dispatch(titleDiscriptionData({ titleObj: replaceHTMLTitle, descriptionObj: replaceHTMLDescription }))

            }
            navigation.goBack()

        }
    };


    const richTextHandle = (descriptionText) => {
        if (descriptionText) {
            setShowDescError(false);
            setDescription(descriptionText);
        } else {
            setShowDescError(true);
            setDescription("");
        }

    };


    //pick image from file
    const picImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            convertBase64(image)
        });
    }
    //convert image address 
    const convertBase64 = (image) => {
        ImgToBase64.getBase64String(image.path)
            .then(base64String => {
                const str = `data:${image.mime};base64,${base64String}`;
                richText.current.insertImage(str)
            }
            )
            .catch(err => console.log(err));

    }




    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderComp
                leftText="Note"
                rightText="Save"
                onPressRight={() => submitContentHandle()}
                headerStyle={{
                    backgroundColor: colors.blackOpacity15
                }}
            />
            <TextInput
                style={{
                    borderColor: 'gray',
                    borderWidth: 1,
                    borderRadius: 5,
                    padding: 10,
                    marginTop: scale(8),
                    marginHorizontal: moderateScale(8),
                    backgroundColor: colors.white
                }}
                placeholder="Title"
                onChangeText={(text) => setTitle(text)}
                value={title}
                initialFocus={true}

            />
            <ScrollView style={{ flex: 1, marginVertical: verticalScale(16) }} >
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>

                    <RichEditor
                        ref={richText}
                        onChange={descriptionText =>
                            richTextHandle(descriptionText)
                        }
                        initialContentHTML={description}
                        placeholder='description'
                        initialFocus={true}
                        initialHeight={scale(600)}

                        editorStyle={{
                            flex: 1,
                            marginHorizontal: moderateScale(8),

                        }}
                    />
                </KeyboardAvoidingView>
            </ScrollView>

            <RichToolbar
                editor={richText}
                actions={[
                    actions.undo,
                    actions.redo,
                    actions.setBold,
                    actions.setItalic,
                    actions.setUnderline,
                    actions.heading1,
                    actions.checkboxList,
                    actions.insertBulletsList,
                    actions.insertOrderedList,
                    // actions.insertImage,

                ]}
                onPressAddImage={() => {
                    picImage()
                }}
                iconMap={{ [actions.heading1]: handleHead }}
            />
        </SafeAreaView>
    );
};

export default AddTaskCompo;

const styles = StyleSheet.create({
    richTextEditorStyle: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 1,
        borderColor: "#ccaf9b",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        fontSize: 40,
    },
})












// import { useRef, useState } from "react";
// import {
//     Pressable,
//     SafeAreaView,
//     StyleSheet,
//     Text,
//     TouchableOpacity,
//     View,
// } from "react-native";
// import {
//     actions,
//     RichEditor,
//     RichToolbar,
// } from "react-native-pell-rich-editor";

// export default function AddTaskCompo() {
//     const richText = useRef();

//     const [descHTML, setDescHTML] = useState("");
//     const [showDescError, setShowDescError] = useState(false);

//     const richTextHandle = (descriptionText) => {
//         if (descriptionText) {
//             setShowDescError(false);
//             setDescHTML(descriptionText);
//         } else {
//             setShowDescError(true);
//             setDescHTML("");
//         }
//     };

//     const submitContentHandle = () => {
//         const replaceHTML = descHTML.replace(/<(.|\n)*?>/g, "").trim();
//         const replaceWhiteSpace = replaceHTML.replace(/&nbsp;/g, "").trim();

//         if (replaceWhiteSpace.length <= 0) {
//             setShowDescError(true);
//         } else {
//             // send data to your server!
//         }
//     };

//     return (
//         <SafeAreaView edges={["bottom", "left", "right"]} style={{ flex: 1 }}>
//             <View style={styles.container}>
//                 <Pressable onPress={() => richText.current?.dismissKeyboard()}>
//                     <Text style={styles.headerStyle}>Your awesome Content</Text>
//                     <View style={styles.htmlBoxStyle}>
//                         <Text>{descHTML}</Text>
//                     </View>
//                 </Pressable>
//                 <View style={styles.richTextContainer}>
//                     <RichEditor
//                         ref={richText}
//                         onChange={richTextHandle}
//                         placeholder="Write your cool content here :)"
//                         androidHardwareAccelerationDisabled={true}
//                         style={styles.richTextEditorStyle}
//                         initialHeight={250}
//                     />
//                     <RichToolbar
//                         editor={richText}
//                         selectedIconTint="#873c1e"
//                         iconTint="#312921"
//                         actions={[
//                             actions.insertImage,
//                             actions.setBold,
//                             actions.setItalic,
//                             actions.insertBulletsList,
//                             actions.insertOrderedList,
//                             actions.insertLink,
//                             actions.setStrikethrough,
//                             actions.setUnderline,
//                         ]}
//                         style={styles.richTextToolbarStyle}
//                     />
//                 </View>
//                 {showDescError && (
//                     <Text style={styles.errorTextStyle}>
//                         Your content shouldn't be empty 🤔
//                     </Text>
//                 )}

//                 <TouchableOpacity
//                     style={styles.saveButtonStyle}
//                     onPress={submitContentHandle}>
//                     <Text style={styles.textButtonStyle}>Save</Text>
//                 </TouchableOpacity>
//             </View>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         height: "100%",
//         backgroundColor: "#ccaf9b",
//         padding: 20,
//         alignItems: "center",
//     },

//     headerStyle: {
//         fontSize: 20,
//         fontWeight: "600",
//         color: "#312921",
//         marginBottom: 10,
//     },

//     htmlBoxStyle: {
//         height: 200,
//         width: 330,
//         backgroundColor: "#fff",
//         borderRadius: 10,
//         padding: 20,
//         marginBottom: 10,
//     },

//     richTextContainer: {
//         display: "flex",
//         flexDirection: "column-reverse",
//         width: "100%",
//         marginBottom: 10,
//     },

//     richTextEditorStyle: {
//         borderBottomLeftRadius: 10,
//         borderBottomRightRadius: 10,
//         borderWidth: 1,
//         borderColor: "#ccaf9b",
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.23,
//         shadowRadius: 2.62,
//         elevation: 4,
//         fontSize: 40,
//     },

//     richTextToolbarStyle: {
//         backgroundColor: "#c6c3b3",
//         borderColor: "#c6c3b3",
//         borderTopLeftRadius: 10,
//         borderTopRightRadius: 10,
//         borderWidth: 1,
//     },

//     errorTextStyle: {
//         color: "#FF0000",
//         marginBottom: 10,
//     },

//     saveButtonStyle: {
//         backgroundColor: "#c6c3b3",
//         borderWidth: 1,
//         borderColor: "#c6c3b3",
//         borderRadius: 10,
//         padding: 10,
//         width: "25%",
//         alignItems: "center",
//         justifyContent: "center",
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.23,
//         shadowRadius: 2.62,
//         elevation: 4,
//         fontSize: 20,
//     },

//     textButtonStyle: {
//         fontSize: 18,
//         fontWeight: "600",
//         color: "#312921",
//     },
// });
