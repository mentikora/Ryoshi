import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" p={2}>
      <Typography component="p">
        &copy; {t('mainHeading')} {currentYear}
      </Typography>
    </Box>
  )
};