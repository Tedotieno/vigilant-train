import { Box, Paper, Typography, styled } from '@mui/material';

const EmptyCardImageContainer = styled(Paper)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  paddingBottom: '150%',
  backgroundColor: theme.palette.grey[200],
  border: '10px solid white',
  [theme.breakpoints.down('md')]: {
    paddingBottom: '100%',
  },
}));

const EmptyCardFooter = styled(Box)(() => ({
  display: 'flex',
  paddingTop: '4px',
  flexGrow: '1',
}));

const EmptyCard = () => {
  return (
    <>
      <EmptyCardImageContainer>
        <Typography
          align='center'
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          Use the search bar above to add books to your reading list
        </Typography>
      </EmptyCardImageContainer>
      <EmptyCardFooter>
        <Typography align='center' style={{ width: '100%' }}>
          Happy Adding!
        </Typography>
      </EmptyCardFooter>
    </>
  );
};

export default EmptyCard;
