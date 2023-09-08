import styled from 'styled-components/native';
import colors from '../../values/colors';

export const RoundButton = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background: ${colors.secondary};
  margin-bottom: 20px;
`;
