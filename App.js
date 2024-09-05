// import { 
//   StyleSheet, 
//   Text, 
//   View 
// } from 'react-native'
// import { 
//   useEffect, 
//   useState,
//   useRef
// } from 'react'
// import {
//   Camera,
//   useCameraDevice,
//   useFrameProcessor
// } from 'react-native-vision-camera'
// import { 
//   Face,
//   useFaceDetector,
//   FaceDetectionOptions
// } from 'react-native-vision-camera-face-detector'
// import { Worklets } from 'react-native-worklets-core'

// export default function App() {
//   const faceDetectionOptions = useRef<FaceDetectionOptions>( {
//     performanceMode: 'fast',
//     landmarks: 'eyes',
//     minFaceSize: '0.15',
//     trackingEnabled: true
//   } ).current

//   const device = useCameraDevice('front')
//   const { detectFaces } = useFaceDetector( faceDetectionOptions )

//   console.log({device});
  

//   useEffect(() => {
//     (async () => {
//       const status = await Camera.requestCameraPermission()
//       console.log({ status })
//     })()
//   }, [device])

//   const handleDetectedFaces = Worklets.createRunOnJS( (
//     faces
//   ) => { 
//     console.log( 'faces detected', faces )
//   })

//   const frameProcessor = useFrameProcessor((frame) => {
//     'worklet'
//     const faces = detectFaces(frame)
//     // ... chain frame processors
//     // ... do something with frame
//     handleDetectedFaces(faces)
//   }, [handleDetectedFaces])

//   return (
//     <View style={{ flex: 1 }}>
//       {!!device? <Camera
//         style={StyleSheet.absoluteFill}
//         device={device}
//         frameProcessor={frameProcessor}
//       /> : <Text>
//         No se ha encontrado una camara
//       </Text>}
//     </View>
//   )
// }




//2

// import { 
//   StyleSheet, 
//   Text, 
//   View 
// } from 'react-native'
// import { 
//   useEffect, 
//   useState,
//   useRef
// } from 'react'
// import {
//   Frame,
//   useCameraDevice,
//   useCameraPermission
// } from 'react-native-vision-camera'
// import {
//   Face,
//   Camera,
//   FaceDetectionOptions
// } from 'react-native-vision-camera-face-detector'

// export default function App() {

//   const { hasPermission, requestPermission } = useCameraPermission()

//   const faceDetectionOptions = useRef<FaceDetectionOptions>( {
//     // detection options
//   } ).current

//   const device = useCameraDevice('front')
//   console.log({device});
//   console.log({hasPermission});
  

//   useEffect(() => {
//     (async () => {
//       // const status = await Camera.requestCameraPermission()
//       // console.log({ status })
//     })()
//   }, [device])

//   function handleFacesDetection(
//     faces,
//     frame
//   ) { 
//     console.log(
//       'faces', faces.length,
//       'frame', frame.toString()
//     )
//   }

//   console.log('device ---> ', !!device);
  
//   return (
//     <View style={{ flex: 1 }}>
//       {!!device? <Camera
//         style={StyleSheet.absoluteFill}
//         device={device}
//         faceDetectionCallback={ handleFacesDetection }
//         faceDetectionOptions={ faceDetectionOptions }
//       /> : <Text>
//         No Device
//       </Text>}
//     </View>
//   )
// }



// ESTE FUNCIONA CON LA CAMARA
// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import {
//   useCameraDevice,
//   useCameraPermission,
//   CameraCaptureError,
//   Camera,
//   useFrameProcessor,
// } from 'react-native-vision-camera';

// export default function App() {

//   const { hasPermission, requestPermission } = useCameraPermission()

//   const device = useCameraDevice('front')
//   console.log({device});
//   console.log({hasPermission});
  

//   if (!hasPermission){
//     console.log('no permision');
//     return (
//       <Text>No Camera Permission</Text>
//     )
    
//   } 
//   if (device == null) return <NoCameraDeviceError />

//   console.log(device == null);


//   const [faces,setFaces] = useState(null)
//   console.log(faces)



  
//   return (
//     <View style={styles.container}>
//       <Camera
//         style={StyleSheet.absoluteFill}
//         device={device}
//         isActive={true}
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// ABRIR CAMARA CON BOTON
// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import {
//   useCameraDevice,
//   useCameraPermission,
//   Camera,
// } from 'react-native-vision-camera';

// export default function App() {

//   const { hasPermission, requestPermission } = useCameraPermission();
//   const device = useCameraDevice('front');
//   const [isCameraActive, setIsCameraActive] = useState(false); // Controla si la cámara está activa o no

//   const handleOpenCamera = async () => {
//     const permission = await requestPermission();
//     console.log({permission});
    
//     if (permission) {
//       setIsCameraActive(true); // Activa la cámara si se concede el permiso
//     } else {
//       console.log('No se obtuvo permiso para la cámara');
//     }
//   };

//   if (!hasPermission) {
//     return (
//       <View style={styles.container}>
//         <Text>No Camera Permission</Text>
//         <TouchableOpacity style={styles.button} onPress={handleOpenCamera}>
//           <Text style={styles.buttonText}>Solicitar permiso y abrir cámara</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   if (device == null) {
//     return <Text>No Camera Device Available</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       {isCameraActive ? (
//         <Camera
//           style={StyleSheet.absoluteFill}
//           device={device}
//           isActive={true}
//         />
//       ) : (
//         <TouchableOpacity style={styles.button} onPress={handleOpenCamera}>
//           <Text style={styles.buttonText}>Abrir Cámara</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     padding: 15,
//     backgroundColor: '#007AFF',
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });


// TOMAR FOTO y MUESTRA LA URI
// import { StatusBar } from 'expo-status-bar';
// import { useState, useRef } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import {
//   useCameraDevice,
//   useCameraPermission,
//   Camera,
// } from 'react-native-vision-camera';

// export default function App() {
//   const { hasPermission, requestPermission } = useCameraPermission();
//   const device = useCameraDevice('front');
//   const cameraRef = useRef(null); // Referencia a la cámara
//   const [isCameraActive, setIsCameraActive] = useState(false); // Controla si la cámara está activa o no
//   const [photo, setPhoto] = useState(null); // Almacena la foto capturada

//   const handleOpenCamera = async () => {
//     const permission = await requestPermission();
//     if (permission) {
//       setIsCameraActive(true); // Activa la cámara si se concede el permiso
//     } else {
//       console.log('No se obtuvo permiso para la cámara');
//     }
//   };

//   const handleTakePhoto = async () => {
//     if (cameraRef.current) {
//       try {
//         const photo = await cameraRef.current.takePhoto({
//           qualityPrioritization: 'speed', // Configuración para tomar la foto rápido
//         });
//         setPhoto(photo);
//         console.log('Foto capturada:', photo);
//       } catch (error) {
//         console.error('Error al tomar la foto:', error);
//       }
//     }
//   };

//   if (!hasPermission) {
//     return (
//       <View style={styles.container}>
//         <Text>No Camera Permission</Text>
//         <TouchableOpacity style={styles.button} onPress={handleOpenCamera}>
//           <Text style={styles.buttonText}>Solicitar permiso y abrir cámara</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   if (device == null) {
//     return <Text>No Camera Device Available</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       {isCameraActive ? (
//         <>
//           <Camera
//             style={StyleSheet.absoluteFill}
//             device={device}
//             isActive={true}
//             photo={true} // Habilita la funcionalidad de tomar fotos
//             ref={cameraRef} // Referencia a la cámara
//           />
//           <TouchableOpacity style={styles.captureButton} onPress={handleTakePhoto}>
//             <Text style={styles.buttonText}>Tomar Foto</Text>
//           </TouchableOpacity>
//         </>
//       ) : (
//         <TouchableOpacity style={styles.button} onPress={handleOpenCamera}>
//           <Text style={styles.buttonText}>Abrir Cámara</Text>
//         </TouchableOpacity>
//       )}
//       {photo && (
//         <Text style={styles.photoText}>
//           Foto capturada guardada en: {photo.path}
//         </Text>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     padding: 15,
//     backgroundColor: '#007AFF',
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   }
// });


// TOMA FOTO, LA MUESTRA Y TIENE BOTON PARA PROCESAR
import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {
  useCameraDevice,
  useCameraPermission,
  Camera,
} from 'react-native-vision-camera';
// import { readFile } from 'react-native-fs';
import * as FileSystem from 'expo-file-system';
import { Buffer } from 'buffer';

export default function App() {
  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice('front');
  const cameraRef = useRef(null); // Referencia a la cámara
  const [isCameraActive, setIsCameraActive] = useState(false); // Controla si la cámara está activa o no
  const [photoUri, setPhotoUri] = useState(null); // Guarda la URI de la foto capturada


  const [photo, setPhoto] = useState(null); // Almacena la foto capturada
  const [savedPhotoUri, setSavedPhotoUri] = useState(null); // Guarda la URI de la imagen guardada

  const handleOpenCamera = async () => {
    const permission = await requestPermission();
    console.log({permission})
    if (permission) {
      setIsCameraActive(true); // Activa la cámara si se concede el permiso
    } else {
      console.log('No se obtuvo permiso para la cámara');
    }
  };

  const handleTakePhoto = async () => {

    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePhoto({
          qualityPrioritization: 'speed', // Configuración para tomar la foto rápido
        });
        console.log({photo})
        setPhotoUri(photo.path); // Guarda la URI de la foto capturada

        // setPhoto(photo);
        console.log('Foto capturada:', photo);

        // Guarda la foto en un directorio permanente
        // const fileName = photo.path.split('/').pop(); // Obtiene el nombre del archivo
        // const destinationPath = `${FileSystem.documentDirectory}${fileName}`;

        // console.log(fileName);
        // console.log(destinationPath);

        

        // await FileSystem.copyAsync({
        //   from: photo.path,
        //   to: destinationPath,
        // });
        // setSavedPhotoUri(destinationPath);
        // console.log('Foto guardada en:', destinationPath);

        setIsCameraActive(false); // Cierra la cámara después de tomar la foto
      } catch (error) {
        console.error('Error al tomar la foto:', error);
      }
    }
  };

  const handleProcessPhoto = async () => {
    console.log('Procesando la foto:', photoUri);
    // Aquí puedes implementar la lógica para procesar la foto

    // const imageBuffer = await readFile(photoUri);
    // const blob = new Blob([imageBuffer], { type: 'image/jpeg' });
    // const imageFile = new File([blob], 'imagen.jpg', { type: 'image/jpeg' });
    try{
      // const base64Image = await FileSystem.readAsStringAsync(`file://${photoUri}`);
    
      const base64Image = await FileSystem.readAsStringAsync(`file://${photoUri}`, {
        encoding: FileSystem.EncodingType.Base64,

      });
      // console.log({base64Image});

      //ESTAS 2 LINEAS FUNCIONAN
      // const arrayBuffer = await FileSystem.readAsStringAsync(`file://${photoUri}`);
      // const base64Image = Buffer.from(arrayBuffer, 'binary').toString('base64');
      
      const blob = new Blob([base64Image], { type: 'image/jpg' });
      const imageFile = new File([blob], 'imagen.jpg', { type: 'image/jpg' });

      console.log({imageFile})
      const formData = new FormData();
      formData.append('file', imageFile);

      console.log("preparando fetch...")
      console.log({formData})
      // const response = await fetch(`http://192.168.1.2:3000/parameters/setup/image`) 
      const response = await fetch('http://192.168.1.2:3000/parameters/verify', {
        body: formData,
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // body: formData,
      // headers: {
      //   "Content-Type": "image/*",
      // },
      
      console.log({response})
    }catch(error){
      console.log({error});
      
    }


  };

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>No Camera Permission</Text>
        <TouchableOpacity style={styles.button} onPress={handleOpenCamera}>
          <Text style={styles.buttonText}>Solicitar permiso y abrir cámara</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (device == null) {
    return <Text>No Camera Device Available</Text>;
  }

  return (
    <View style={styles.container}>
      {photoUri ? (
        <>
          <Image source={{ uri: `file://${photoUri}` }} style={styles.photo} />
          <TouchableOpacity style={styles.processButton} onPress={handleProcessPhoto}>
            <Text style={styles.buttonText}>Procesar</Text>
          </TouchableOpacity>
        </>
      ) : isCameraActive ? (
        <>
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            photo={true} // Habilita la funcionalidad de tomar fotos
            ref={cameraRef} // Referencia a la cámara
          />
          <TouchableOpacity style={styles.captureButton} onPress={handleTakePhoto}>
            <Text style={styles.buttonText}>Tomar Foto</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleOpenCamera}>
          <Text style={styles.buttonText}>Abrir Cámara</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 15,
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  captureButton: {
    position: 'absolute',
    bottom: 30,
    padding: 15,
    backgroundColor: '#FF6347',
    borderRadius: 8,
  },
  photo: {
    width: 300,
    height: 400,
    resizeMode: 'contain',
  },
  processButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#32CD32',
    borderRadius: 8,
  },
});


