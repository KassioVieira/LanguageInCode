import styled from 'styled-components/native';

type RowProps = {
  justifyContent: string;
};

export const Row = styled.View<RowProps>`
  flex-direction: row;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;
`;
