import React from 'react';
import {
  Box,
  Typography,
} from '@material-ui/core';
import css from './Welcome.module.scss';
import img from './images/fish.png';

const Logo = () => {
  return (
    <Box component="div" className={css.logo} flexGrow={1}>
      <Typography
        component="h1"
        variant="h1"
        classes={{root: 'logo-heading'}}
        className={css.logo__pre}
      >
        Ryoshi
      </Typography>
      <img className={css.logo__image} src={img} alt="Ryoshi" />
      <Typography
        component="h2"
        variant="h1"
        classes={{root: 'logo-heading'}}
        className={css.logo__post}
      >
        Ryoshi
      </Typography>
    </Box>
  )
};

export const Welcome = () => <Box className={css.container}>
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
            header
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
</Box>;