import React from 'react';
import { CopyIcon, TextAreaWrapper } from './TextArea.styles';
import { Card } from '../Layout/Card';
import colors from '../../values/colors';
import { Row } from '../Layout/Row';
import { TouchableOpacity } from 'react-native';

type TextAreaProps = {
  text: string;
  editable?: boolean;
  copyPressed: () => void;
  handleTextChange: (text: string) => void;
  background?: string;
};

const TextArea = ({
  text,
  handleTextChange,
  editable,
  copyPressed,
  background
}: TextAreaProps) => {
  return (
    <Card background={background}>
      <Row justifyContent='flex-end'>
        <TouchableOpacity onPress={copyPressed}>
          <CopyIcon name='content-copy' size={24} color={colors.text} />
        </TouchableOpacity>
      </Row>
      <TextAreaWrapper
        value={text}
        onChangeText={text => handleTextChange(text)}
        placeholder='Digite aqui...'
        multiline
        editable={editable}
      />
    </Card>
  );
};

TextArea.defaultProps = {
  editable: true,
  background: null
};

export default TextArea;
