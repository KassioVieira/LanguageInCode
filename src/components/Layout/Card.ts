import styled from 'styled-components/native';
import colors from '../../values/colors';

type CardProps = {
  background?: string;
};

export const Card = styled.View<CardProps>`
  background-color: ${({ background }) => background || colors.secondary};
  border-radius: 8px;
  elevation: 3;
  shadow-color: #000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.3;
  shadow-radius: 2px;
  padding: 10px;
  margin: 10px;
`;
