import React from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { route } from 'route';

export const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lang => {
    i18n.changeLanguage(lang);
  }

  return (
    <Box component="header" p={2}>
      <Grid container justify="space-between">
        <Box>
          <RouterLink to="/">
            <Typography
              component="h1"
              variant="h5"
            >
              {t('mainHeading')}
            </Typography>
          </RouterLink>
        </Box>
        <Box>
          <Button size="small" onClick={() => changeLanguage('ua')}>{t('button.lang.ua')}</Button>
          <Button size="small" onClick={() => changeLanguage('en')}>{t('button.lang.en')}</Button>
          <Button
            component={RouterLink}
            to={route.auth}
            variant="contained"
            color="primary"
          >
            {t('header.auth')}
          </Button>
        </Box>
      </Grid>
    </Box>
  )
};
