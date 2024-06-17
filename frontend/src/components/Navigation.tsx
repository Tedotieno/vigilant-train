import { v4 as uuidv4 } from 'uuid';
import { List, ListItem, Link, styled } from '@mui/material';

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  width: '100%',
  paddingBottom: '4px',
  color: theme.palette.secondary.main,
  '&:hover': {
    color: theme.palette.primary.main,
    cursor: 'pointer',
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
}));

const sidebarNavigationLinks = ['Books', 'Students', 'Categories', 'Music'].map(
  (link) => ({
    id: uuidv4(),
    link,
  })
);

const Navigation: React.FC = () => {
  return (
    <List sx={{ py: '12%', flexGrow: '1' }}>
      {sidebarNavigationLinks.map(({ link, id }) => (
        <ListItem sx={{ pb: '6%' }} key={id}>
          <StyledLink href={`/${link.toLowerCase()}`}>{link}</StyledLink>
        </ListItem>
      ))}
    </List>
  );
};

export default Navigation;
