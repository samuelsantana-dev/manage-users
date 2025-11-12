export interface ComponentTextFieldProps {
  id?: string;
  margin?: "none" | "normal" | "dense" | undefined;
  label?: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  type?: string;
  autoFocus?: boolean;
}