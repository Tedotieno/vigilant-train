import { Box, styled, Drawer, Divider } from '@mui/material';

import { AvatarUser, Logout, Navigation } from '.';

const SideBarContainer = styled(Box)(({ theme }) => ({
  width: '20%',
  height: '100%',
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

const StyledDrawer = styled(Drawer)(() => ({
  height: '100%',
  '& > :first-of-type': {
    position: 'static',
  },
}));

const Sidebar: React.FC = () => {
  return (
    <SideBarContainer>
      <StyledDrawer variant='permanent' anchor='left'>
        <AvatarUser />
        <Divider />
        <Navigation />
        <Logout />
      </StyledDrawer>
    </SideBarContainer>
  );
};

export default Sidebar;
