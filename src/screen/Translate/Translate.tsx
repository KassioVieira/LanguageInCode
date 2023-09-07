import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  TapGestureHandler,
  State,
  GestureHandlerRootView
} from 'react-native-gesture-handler';
import Voice from '@react-native-voice/voice';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [recognizedText, setRecognizedText] = useState<String>('');

  useEffect(() => {
    Voice.onSpeechResults = e => {
      const recognized = e.value[0];
      changeText(recognized);
    };

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
      stopRecording();
    };
  }, []);

  async function startRecording() {
    try {
      setIsRecording(true);
      await Voice.start('pt-BR');
    } catch (error) {
      console.error(error);
    }
  }

  async function stopRecording() {
    try {
      setIsRecording(false);
      await Voice.stop();
    } catch (error) {
      console.error(error);
    }
  }

  const handleButtonStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === State.BEGAN) {
      startRecording();
    } else if (nativeEvent.state === State.END) {
      stopRecording();
    }
  };

  const changeText = (text: String) => {
    setRecognizedText(text);
    stopRecording();
  };

  const textToBinary = (text: String) => {
    let binaryText = '';
    for (let i = 0; i < text.length; i++) {
      const char = text.charCodeAt(i).toString(2);
      binaryText += '0'.repeat(8 - char.length) + char + ' ';
    }
    return binaryText.trim();
  };

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <TapGestureHandler
          onHandlerStateChange={handleButtonStateChange}
          maxDist={10}
        >
          <View
            style={[
              styles.roundButton,
              { backgroundColor: isRecording ? 'red' : 'blue' }
            ]}
          >
            <FontAwesome5
              name='microphone'
              size={42}
              color={isRecording ? 'black' : 'white'}
            />
          </View>
        </TapGestureHandler>
        <Text style={{ marginTop: 20 }}>Texto:</Text>
        <Text style={{ fontSize: 16 }}>{recognizedText}</Text>
        <View style={{ marginTop: 20 }}>
          <Text style={{ textAlign: 'center' }}>Binário:</Text>
          <Text style={{ margin: 16 }}>{textToBinary(recognizedText)}</Text>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  roundButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
