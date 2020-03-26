import React from 'react';
import {
  Box,
  Typography,
} from '@material-ui/core';
import css from './Welcome.module.scss';
import img from './images/fish.png';
import { useTranslation } from 'react-i18next';

const Logo = () => {
  const { t } = useTranslation();
  return (
    <Box component="div" className={css.logo} flexGrow={1}>
      <Typography
        component="h1"
        variant="h1"
        classes={{root: 'logo-heading'}}
        className={css.logo__pre}
      >
        {t('mainHeading')}
      </Typography>
      <img className={css.logo__image} src={img} alt="Ryoshi" />
      <Typography
        component="h2"
        variant="h1"
        classes={{root: 'logo-heading'}}
        className={css.logo__post}
      >
        {t('mainHeading')}
      </Typography>
    </Box>
  )
};

export const Welcome = () => {
  const { t } = useTranslation();
  return (
    <Box className={css.container}>
      <Box className={css.indents}>
        <Box
          component="div"
          className={css.outer}
          boxShadow={10}
        >
          <Box
            className={css.inner}
            display="flex"
            flexDirection="column"
            flexGrow={1}
          >
            <Box
              display="flex"
              flexDirection="column"
              flexGrow={1}
            >
              <Box component="header">
                {t('button.signIn')}
              </Box>
              <Box
                component="div"
                display="flex"
                alignItems="center"
                flexGrow={1}
              >
                <Logo />
              </Box>
              <Box component="footer">
                footer
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}