import styled from 'styled-components/native';

type SpaceProps = {
  width?: number;
  height?: number;
};

export const Spacer = styled.View<SpaceProps>`
  width: ${({ width }) => width || 0}px;
  height: ${({ height }) => height || 0}px;
`;
