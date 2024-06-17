import { Box, Button } from '@mui/material';
import { useAuth } from '../context';

const Logout = () => {
  const { logout } = useAuth();

  return (
    <Box>
      <Button onClick={() => logout()} sx={{ fontWeight: '800' }}>
        Logout
      </Button>
    </Box>
  );
};

export default Logout;
