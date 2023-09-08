import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { State } from 'react-native-gesture-handler';
import Voice from '@react-native-voice/voice';
import BottomBar from '../../components/BottomBar';
import Microphone from '../../components/Microphone';
import TopBar from '../../components/TopBar';
import LanguagesBar from '../../components/LanguagesBar';
import { Spacer } from '../../components/Spacer/Spacer';
import TextArea from '../../components/TextArea';
import colors from '../../values/colors';
import { textToBinary } from '../../utils/ConvertText';

export default function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [recognizedText, setRecognizedText] = useState<string>('');

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

  const changeText = (text: string) => {
    setRecognizedText(text);
    stopRecording();
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TopBar />
        <Spacer height={26} />
        <LanguagesBar />
        <Spacer height={12} />
        <TextArea
          text={recognizedText}
          handleTextChange={text => {
            setRecognizedText(text);
          }}
          copyPressed={() => {}}
        />
        <Spacer height={12} />
        <TextArea
          text={textToBinary(recognizedText)}
          handleTextChange={() => {}}
          copyPressed={() => {}}
          editable={false}
          background={colors.gray}
        />
        <BottomBar>
          <Microphone
            handleMicrophonePress={handleButtonStateChange}
            isRecording={isRecording}
          />
        </BottomBar>
      </View>
    </TouchableWithoutFeedback>
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
    width: '100%',
    height: '100%',
    backgroundColor: '#FAFAFA'
  }
});
