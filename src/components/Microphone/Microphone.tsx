import React from 'react';
import {
  TapGestureHandler,
  State,
  GestureHandlerRootView
} from 'react-native-gesture-handler';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import { RoundButton } from './Microphone.styles';
import colors from '../../values/colors';

type MicrophoneProps = {
  handleMicrophonePress: (event: any) => void;
  isRecording: boolean;
};

const Microphone = ({
  handleMicrophonePress,
  isRecording
}: MicrophoneProps) => {
  return (
    <GestureHandlerRootView>
      <TapGestureHandler
        onHandlerStateChange={event => handleMicrophonePress(event)}
        maxDist={10}
      >
        <RoundButton>
          <FontAwesome5
            name='microphone'
            size={42}
            color={isRecording ? colors.record : colors.text}
          />
        </RoundButton>
      </TapGestureHandler>
    </GestureHandlerRootView>
  );
};

export default Microphone;
