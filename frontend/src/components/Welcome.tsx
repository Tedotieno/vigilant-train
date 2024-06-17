import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  styled,
  Button,
  Paper,
} from '@mui/material';

import { useAuth } from '../context/Auth';

const WelcomeBackground = styled(Box)(() => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: '200',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background:
    'linear-gradient(153deg, rgba(40,184,184,0.7343312324929971) 0%, rgba(207,250,250,1) 100%)',
}));

const WelcomeContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '30%',
  padding: '2% 1%',
  color: theme.palette.secondary.main,
  background: 'white',
}));

const StyledButton = styled(Button)(() => ({
  color: 'white',
  borderRadius: '12px',
  fontWeight: '800',
  marginTop: '4%',
}));

const Welcome: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const { setFullName } = useAuth();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleLogin = () => {
    if (inputValue.trim() !== '') {
      setFullName(inputValue.trim());
    }
  };

  return (
    <WelcomeBackground>
      <WelcomeContainer>
        <Box display='flex' justifyContent='center'>
          <img src='src/assets/icons/ello-logo.svg' alt='' width='12%' />
        </Box>
        <Typography variant='h5' margin='4% 0' fontWeight='800' align='center'>
          Welcome to Ello
        </Typography>
        <TextField
          id='full-name'
          value={inputValue}
          label='Enter Name'
          variant='outlined'
          onChange={handleInputChange}
        />
        <StyledButton variant='contained' onClick={handleLogin}>
          Log In
        </StyledButton>
      </WelcomeContainer>
    </WelcomeBackground>
  );
};

export default Welcome;
