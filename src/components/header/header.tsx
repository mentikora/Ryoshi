import React from 'react';
import { Box, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <Box component="header">
      <Button size="small">{t('button.lang.ua')}</Button>
      <Button size="small">{t('button.lang.en')}</Button>
      <div className="auth">
        <Button>{t('button.signUp')}</Button>
        <Button>{t('button.signIn')}</Button>
      </div>
    </Box>
  )
};
