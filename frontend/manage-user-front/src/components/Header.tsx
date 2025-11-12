import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useAuthValue } from '../context/Context';

export default function Header() {
  const { user } = useAuthValue();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {user && (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Olá, {user.name}
            </Typography>
          )}
             <Link to="/">
              <Button  color="inherit">
                Registre-se
              </Button>
             </Link>
             <Link to="/users-table">
              <Button  color="inherit">
                Tabela
              </Button>
             </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
