import React from 'react';
import {
  // Typography,
  Grid,
  Container,
  Tabs,
  Tab,
  Typography,
  Box
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { FormContainer } from 'components';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

export const Authorization = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const { t } = useTranslation();

  const onSignUp = () => console.log('sign up');

  const onSignIn = () => console.log('sign in');

  return (
    <Container>
      <Grid container>
        <Grid item xs={4}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label={t('button.signUp')} />
            <Tab label={t('button.signIn')} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <FormContainer onSubmit={() => onSignUp()}>
              signUp
            </FormContainer>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <FormContainer onSubmit={() => onSignIn()}>
              signIn
            </FormContainer>
          </TabPanel>
        </Grid>
        <Grid item xs={8}>2</Grid>
      </Grid>
    </Container>
  )
};
