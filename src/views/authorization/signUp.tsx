import React from 'react';
import { FormContainer, FormField } from 'components';
import { useTranslation } from 'react-i18next';

type Props = {
  onSubmit: any;
}

const SignUp: React.FC<Props> = ({
  onSubmit
}) => {
  const { t } = useTranslation();
  return (
    <FormContainer onSubmit={onSubmit}>
      <FormField type="email" name="email" label={t('form.email')} />
      <FormField type="password" name="password" label={t('form.password')} />
    </FormContainer>
  )
}

export { SignUp };
