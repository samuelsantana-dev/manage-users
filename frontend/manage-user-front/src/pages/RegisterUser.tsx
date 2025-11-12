import  { useState } from 'react';
import {
  ThemeProvider,
  createTheme,
  Container,
  Box,
  Button,
  Typography,
  Avatar,
  CssBaseline,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import type { User } from '../types/User';
import { ComponentTextField } from '../components/TextField';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', 
    },
  },
});

export default function RegisterForm() {
  const [values, setValues] = useState<User>({});

  const [errors, setErrors] = useState<User>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const validate = () => {
    const err = {} as User;
    if (!values.name?.trim()) err.name = 'Nome é obrigatório';
    if (!values.email?.trim()) err.email = 'Email é obrigatório';
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) err.email = 'Email inválido';
    if (!values.password) err.password = 'Senha é obrigatória';
    else if (values.password.length < 6) err.password = 'Senha deve ter ao menos 6 caracteres';
    if (!values.confirmPassword) err.confirmPassword = 'Confirme a senha';
    else if (values.password !== values.confirmPassword) err.confirmPassword = 'As senhas não coincidem';
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      setSubmitted(true);
      console.log('Dados para envio:', values);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Avatar sx={{ bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registro
          </Typography>

          {submitted ? (
            <Box sx={{ mt: 2 }}>
              <Typography>Registro realizado com sucesso ✅</Typography>
            </Box>
          ) : (
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
              <ComponentTextField
                margin="normal"
                id="name"
                label="name"
                name="name"
                value={values.name}
                onChange={handleChange('name')}
                error={Boolean(errors.name)}
                helperText={errors.name}
                autoFocus
              />

              <ComponentTextField
                margin="normal"
                id="email"
                label="Email"
                name="email"
                value={values.email}
                onChange={handleChange('email')}
                error={Boolean(errors.email)}
                helperText={errors.email}
              />

              <ComponentTextField
                margin="normal"
                name="password"
                label="password"
                type="password"
                id="password"
                value={values.password}
                onChange={handleChange('password')}
                error={Boolean(errors.password)}
                helperText={errors.password}
              />

              <ComponentTextField
                margin="normal"
                name="confirmPassword"
                label="Confirmar senha"
                type="password"
                id="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange('confirmPassword')}
                error={Boolean(errors.confirmPassword)}
                helperText={errors.confirmPassword}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Criar conta
              </Button>
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
