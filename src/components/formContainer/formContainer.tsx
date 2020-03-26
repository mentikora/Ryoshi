import React from 'react';
import {
  Button,
  Divider,
  Grid,
  Box,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

export const FormContainer = ({
  children,
  onSubmit
}) => {

  const { t } = useTranslation();

  return (
    <Box>
      <Grid container>
        <Grid item>
          <Box p={2}>
            {children}
          </Box>
        </Grid>
      </Grid>
      <Divider />
      <Grid container justify="center">
        <Grid item >
          <Box p={2}>
            <Button
              onClick={onSubmit}
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              {t('button.submit')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
};