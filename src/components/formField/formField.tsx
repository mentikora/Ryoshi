import React from 'react';
import { Field } from 'react-final-form';
import { TextField } from '@material-ui/core';

type Props = {
  name: string;
  type: string;
  label: string;
  meta?: any;
  placeholder?: string;
}

const FormField: React.FC<Props> = ({
  name,
  type,
  label,
  placeholder,
  meta,
}, ...rest) => (
  <Field
    name={name}
    type={type}
    render={({ input, meta }) => (
      <TextField
        fullWidth
        label={label}
        placeholder={placeholder}
        {...input}
      />
    )}
    {...rest}
  />
);

export { FormField };
