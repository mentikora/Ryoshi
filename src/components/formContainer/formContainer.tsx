import React from 'react';
import {
  Button,
  Grid,
  Box,
} from '@material-ui/core';
import { Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        marginBottom: theme.spacing(2),
      },
    },
  }),
);

type Props = {
  children: any;
  onSubmit: any;
}

const FormContainer: React.FC<Props> = ({
  children,
  onSubmit,
}) => {

  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>

          {/* react final form */}
          <Form
            onSubmit={onSubmit}
            render={
              ({ handleSubmit, submitting }) => (
                <form onSubmit={handleSubmit} autoComplete="off" className={classes.root}>

                  {/*  pass children */}
                  {children}

                  {/* submit button */}
                  <Grid container justify="center">
                    <Grid item >
                      <Box p={2}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          disabled={submitting}
                        >
                          {t('button.submit')}
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                  {/* submit button END */}
                </form>
              )
            }
          />
          {/* react final form END*/}

        </Grid>
      </Grid>
    </Box>
  )
};

export { FormContainer };
