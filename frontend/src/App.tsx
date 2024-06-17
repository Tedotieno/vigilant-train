import '@fontsource/mulish';
import '@fontsource/mulish/200.css';
import '@fontsource/mulish/300.css';
import '@fontsource/mulish/400.css';
import '@fontsource/mulish/500.css';
import '@fontsource/mulish/600.css';
import '@fontsource/mulish/800.css';
import { Container, CssBaseline, styled } from '@mui/material';

import { Main, Sidebar, Welcome } from './components';
import { useAuth } from './context/Auth';

const PageLayout = styled(Container)(({ theme }) => ({
  display: 'flex',
  height: '100vh',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    padding: '16px 0 ',
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '1400px',
  },
}));

const App: React.FC = () => {
  const { fullName } = useAuth();

  return (
    <>
      <CssBaseline />
      <PageLayout>
        {!fullName ? <Welcome /> : null}
        <Sidebar />
        <Main />
      </PageLayout>
    </>
  );
};

export default App;
