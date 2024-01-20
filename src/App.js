import { Typography } from '@mui/material';
import Login from './components/Login.jsx'
// import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
      {/* <Typography variant='h4'> this is a sample web application</Typography> */}
    </div>
  );
}

export default App;
