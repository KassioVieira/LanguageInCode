import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const TextAreaWrapper = styled.TextInput`
  height: 150px;
  padding: 10px;
  font-size: 16px;
  text-align-vertical: top;
`;

export const CopyIcon = styled(MaterialIcons)`
  float: right;
`;
