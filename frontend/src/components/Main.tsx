import { Box, styled } from '@mui/material';

import { Books } from '.';

const MainContainer = styled(Box)(() => ({
  width: '80%',
  height: '100%',
  flexGrow: '1',
  position: 'relative',
  padding: '0 1%',
  overflowY: 'scroll',
}));

const Main: React.FC = () => (
  <MainContainer>
    <Books />
    {/* We can add more components here and swap them out with Books component, we can use the navigaiton links from the sidebar to toggle/display the said components */}
  </MainContainer>
);

export default Main;
