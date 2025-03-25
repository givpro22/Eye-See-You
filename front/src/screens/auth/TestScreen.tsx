import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Camera, CameraDevice, PhotoFile, CameraCaptureError } from 'react-native-vision-camera';

function TestScreen() {
  const [hasPermission, setHasPermission] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [device, setDevice] = useState<CameraDevice | undefined>(undefined);
  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    const prepare = async () => {
      const status = await Camera.requestCameraPermission();
      if (status === 'authorized') {
        setHasPermission(true);
        const devices = await Camera.getAvailableCameraDevices();
        const back = devices.find(d => d.position === 'back');
        setDevice(back);
      }
    };
    prepare();
  }, []);


  const takePhoto = async () => {
    if (cameraRef.current == null) return;
    try {
      const photo: PhotoFile = await cameraRef.current.takePhoto({
        flash: 'off',
      });
      console.log('Photo captured:', photo.path);
    } catch (e) {
      console.error('Failed to take photo:', e);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title={showCamera ? "카메라 숨기기" : "카메라 보기"}
        onPress={() => setShowCamera(prev => !prev)}
      />
      {showCamera && (
        <Camera
          ref={cameraRef}
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={showCamera}
          photo={true}
        />
      )}
      {showCamera && (
        <TouchableOpacity style={styles.captureButton} onPress={takePhoto}>
          <Text style={styles.captureText}>📸</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  captureButton: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 35,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  captureText: {
    fontSize: 30,
  },
});