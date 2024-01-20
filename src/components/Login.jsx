import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import PasswordIcon from '../svg/passwordIcon';
import { FormControlLabel } from '@mui/material';
import Button from '@mui/material/Button';

const Login = () => {
    const buttonStyles = {
        width: '381px',
        padding: '10px',
        gap: '10px',
        borderRadius: "10px",
        background: '#0B58F5',
    };
    return (
        <>
            <Stack spacing={2}>
                <Typography
                    style={{
                        fontSize: 48,
                        fontFamily: 'Poppins',
                        fontWeight: 700,
                        color: '#161C24',
                    }}
                >
                    Login
                </Typography>
                <Typography
                    style={{
                        fontSize: 16,
                        fontFamily: 'Poppins',
                        fontWeight: 500,
                        color: '#161C24',
                    }}
                >
                    Enter your account details
                </Typography>

                <TextField id="standard-basic" label="Standard" variant="standard" />
                <TextField
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    type="password"
                    InputProps={{
                        endAdornment: <PasswordIcon />,
                    }}
                />
                <FormControlLabel required control={<Checkbox style={{ borderRadius: 3, border: "1px solid #0B58F5", width: 14.823, height: 14.823 }} />} label="Remember Me" />
                <Button variant="contained" style={buttonStyles}>
                    Login
                </Button>
            </Stack>
        </>
    );
};

export default Login;
