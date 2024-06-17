import { Box, Avatar, Typography } from '@mui/material';

import theme from '../theme';
import { useAuth } from '../context';

const AvatarUser: React.FC = () => {
  const { fullName } = useAuth();

  return (
    <Box display='flex' flexDirection='column' alignItems='center' py='16%'>
      <Avatar
        sx={{
          width: 56,
          height: 56,
          background: theme.palette.primary.main,
        }}
      />
      <Typography
        variant='h5'
        sx={{ color: theme.palette.secondary.main, mt: '4%' }}
      >
        {fullName}
      </Typography>
    </Box>
  );
};

export default AvatarUser;
