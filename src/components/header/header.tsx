import React from 'react';
import { Box, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lang => {
    i18n.changeLanguage(lang);
  }

  return (
    <Box component="header">
      <Button size="small" onClick={() => changeLanguage('ua')}>{t('button.lang.ua')}</Button>
      <Button size="small" onClick={() => changeLanguage('en')}>{t('button.lang.en')}</Button>
      <div className="auth">
        <Button>{t('button.signUp')}</Button>
        <Button>{t('button.signIn')}</Button>
      </div>
    </Box>
  )
};
