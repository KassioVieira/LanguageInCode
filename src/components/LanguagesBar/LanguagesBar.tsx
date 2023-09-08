import React from 'react';
import { Card } from '../Layout/Card';
import { MaterialIcons } from '@expo/vector-icons';
import { LanguageButton, LanguageLabel } from './LanguagesBar.styles';
import colors from '../../values/colors';
import { Row } from '../Layout/Row';

const LanguagesBar = () => {
  return (
    <Card>
      <Row justifyContent='space-between'>
        <LanguageButton>
          <LanguageLabel>Português</LanguageLabel>
        </LanguageButton>
        <MaterialIcons name='sync-alt' size={24} color={colors.text} />
        <LanguageButton>
          <LanguageLabel>Binário</LanguageLabel>
        </LanguageButton>
      </Row>
    </Card>
  );
};

export default LanguagesBar;
