import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from '../../redux/hooks'
import { decrement, increment } from '../../redux/reducers/counterSlice'
import { logout } from '../../redux/reducers/authThunks'

const TestScreen = () => {
  const count = useSelector((state) => state.counterSlice.value)
  const notes = useSelector((state) => state.notesSlice.title)
  const dispatch = useDispatch()


console.log(notes)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>TestScreen</Text>
      <Button onPress={() => dispatch(increment())} title='increment' />
      <Text style={{ fontSize: 18 }}>{count}</Text>
      <Button onPress={() => dispatch(decrement())} title='decrement' />
      <Text style={{ fontSize: 18 }}>{count}</Text>
      <Button onPress={() => dispatch(logout())} title='LogOut' />
    </View>
  )
}

export default TestScreen

const styles = StyleSheet.create({})




// import React from 'react';
// import {
//   Button,
//   PermissionsAndroid,
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';

// const requestCameraPermission = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.CAMERA,
//       {
//         title: 'Cool Photo App Camera Permission',
//         message:
//           'Cool Photo App needs access to your camera ' +
//           'so you can take awesome pictures.',
//         buttonNeutral: 'Ask Me Later',
//         buttonNegative: 'Cancel',
//         buttonPositive: 'OK',
//       },
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log('You can use the camera');
//     } else {
//       console.log('Camera permission denied');
//     }
//   } catch (err) {
//     console.warn(err);
//   }
// };

// const TestScreen = () => (
//   <View style={styles.container}>
//     <Text style={styles.item}>Try permissions</Text>
//     <Button title="request permissions" onPress={requestCameraPermission} />
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: StatusBar.currentHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   item: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default TestScreen;


// import { View, Text } from 'react-native'
// import React from 'react'
// import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
// import { useEffect } from 'react'



// const TestScreen = () => {

//   // All  permissions useEffect
//   useEffect(() => {

//     // requestCameraPermission()
//     // requestStoragePermission(),
//     // requestLocationPermission()
//     requestImageReadPermission()

//   }, [])

//   //Camera  permissions
//   const requestCameraPermission = async () => {
//     await request(PERMISSIONS.ANDROID.CAMERA).then((response) => {
//       console.log(response)
//     })
//   }
//   //Location  permissions
//   const requestLocationPermission = async () => {
//     await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((response) => {
//       console.log(response)
//     })
//   }
//   //Storage  permissions
//   const requestStoragePermission = async () => {
//     await request(PERMISSIONS.ANDROID.ACCESS_MEDIA_LOCATION).then((response) => {
//       console.log(response)
//     })
//   }
//   //MEDIA_IMAGES  permissions
//   const requestImageReadPermission = async () => {
//     await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES).then((response) => {
//       console.log(response)
//     })
//   }
//   //check  camera Permissions
//   const checkPermission = () => {
//     check(PERMISSIONS.ANDROID.CAMERA)
//       .then((result) => {
//         switch (result) {
//           case RESULTS.UNAVAILABLE:
//             console.log('This feature is not available (on this device / in this context)');
//             break;
//           case RESULTS.DENIED:
//             console.log('The permission has not been requested / is denied but requestable');
//             break;
//           case RESULTS.LIMITED:
//             console.log('The permission is limited: some actions are possible');
//             break;
//           case RESULTS.GRANTED:
//             console.log('The permission is granted');
//             break;
//           case RESULTS.BLOCKED:
//             console.log('The permission is denied and not requestable anymore');
//             break;
//         }
//       })
//       .catch((error) => {
//         console.log("error in permission")
//       });
//   }

// }

// export default TestScreen







// import React from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import PagerView from 'react-native-pager-view';

// const TestScreen = () => {
//   return (
//     <PagerView style={styles.pagerView} initialPage={0}>
//       <View key="1">
//         <Text>First page</Text>
//       </View>
//       <View key="2">
//         <Text>Second page</Text>
//       </View>
//     </PagerView>
//   );
// };

// const styles = StyleSheet.create({
//   pagerView: {
//     flex: 1,
//   },
// });
// export default TestScreen