import styled from 'styled-components/native';
import colors from '../../values/colors';

export const WrapperTop = styled.View`
  width: 100%;
  height: 15%;
  background-color: ${colors.primary};
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const AppName = styled.Text`
  color: ${colors.secondary};
  font-size: 20px;
  font-weight: 700;
`;
