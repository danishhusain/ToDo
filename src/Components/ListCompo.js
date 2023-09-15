import React from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    TouchableOpacity,
    View,
} from 'react-native';

import Swipelist from 'react-native-swipeable-list-view';
import { IconButton } from 'react-native-paper';
import { useDispatch, useSelector } from '../redux/hooks';
import { scale, verticalScale } from '../styles/responsiveSize';
import commonStyles from '../styles/commonStyles';
import { deleteMethod } from '../redux/reducers/notesSlice';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '../constants/navigationStrings';
import NoDataFound from './NoDataFound';



const ListCompo = () => {
    const notesData = useSelector((state) => state.notesSlice.titleDiscriptionDataState)
    const dispatch = useDispatch()
    const navigation = useNavigation()


    return (
        <SafeAreaView style={{ flex: 1 }}>
            {notesData.length > 0 ?
                <Swipelist
                    data={notesData}
                    renderRightItem={(data, index) => (
                        <View key={index} style={styles.container}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate(navigationStrings.ADD_TASK_COMPO,
                                    {
                                        index: index,
                                    }
                                )}
                                style={{ flex: 1, justifyContent: 'center' }}
                            >
                                <Text style={commonStyles.fontBold18}>
                                    {data.titleObj}
                                </Text>
                                <Text
                                    numberOfLines={1}
                                    style={[commonStyles.fontSize13, {}]}>
                                    {data.descriptionObj}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    renderHiddenItem={(data, index) => (
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={[styles.rightAction, { backgroundColor: '#bfbfbf' }]}
                                onPress={() => {
                                    navigation.navigate(navigationStrings.ADD_TASK_COMPO,
                                        {
                                            index: index,
                                        }
                                    )
                                }}
                            >
                                <IconButton icon={'pen'} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.rightAction, { backgroundColor: 'red' }]}
                                onPress={() => {
                                    dispatch(deleteMethod(index))
                                }}
                            >
                                <IconButton icon={'delete'} />

                            </TouchableOpacity>
                        </View>
                    )}
                    rightOpenValue={200}
                />
                : <NoDataFound />}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 60,
        marginVertical: verticalScale(4),
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        paddingLeft: scale(10),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4
        // flex:1
    },

    rightAction: {
        width: '100%',
        marginVertical: verticalScale(4),
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        height: 60,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4
    },
});

export default ListCompo;