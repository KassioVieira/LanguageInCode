import React, { ReactNode } from 'react';
import { WrapperBottom } from './BottomBar.styles';

type BottomBarProps = {
  children: ReactNode;
};

const BottomBar = ({ children }: BottomBarProps) => {
  return <WrapperBottom>{children}</WrapperBottom>;
};

export default BottomBar;
