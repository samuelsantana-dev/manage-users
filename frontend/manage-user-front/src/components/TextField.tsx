import TextField from '@mui/material/TextField';
import type { ComponentTextFieldProps } from '../types';

export const ComponentTextField = ({
  id,
  label,
  name,
  value,
  margin,
  onChange,
  error,
  helperText,
  type = 'text',
  autoFocus = false,
}: ComponentTextFieldProps) => {
  return (
    <TextField
      fullWidth
      margin={margin}
      id={id}
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      error={Boolean(error)}
      helperText={helperText}
      autoFocus={autoFocus}
    />
  );
};
