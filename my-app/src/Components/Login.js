import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';

import CssBaseline from '@mui/material/CssBaseline';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import logo from "../images/bank-logo.png" ;
import { Link, Box, TextField, Button, Container, Grid, Typography, Alert, Paper } from "@mui/material"
import {  Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Bank.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [eStatus, setEStatus] = useState(false) 

    const handleLogin = (e) => {
        setEStatus(false)
        e.preventDefault();
        let user = localStorage.getItem(email)

        if( user !== null){
            let correctpassword = JSON.parse(user).password
            if(password === correctpassword){
                localStorage.setItem("Current User", email)
                navigate("/EditProfile")
                window.location.reload();

            }
        }
        setEStatus(true)
        //alert(errorM)

    }
  

  return (
    
      <Grid container component="main" sx={{ height: '100%' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.pexels.com/photos/1095826/pexels-photo-1095826.jpeg?cs=srgb&dl=pexels-nextvoyage-1095826.jpg&fm=jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
          }}
        />
   
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
                
            <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            flexDirection = "column"
            >
              {eStatus && 
                 <Alert variant="filled"  sx={{ mb: 3, width:"100%" }} severity="error" onClose={() => {setEStatus(false)}}> 
                     incorrect login credentials
                 </Alert>
               }
            <Typography component="h1" variant="h4" sx={{ mb: 3, color:"#00237B", fontWeight: "bold" }}>
                    Welcome to Personal Internet Banking
            </Typography>
            
            <Box component="form" onSubmit={handleLogin} >
              <TextField
                    required
                    id="email"
                    name='email'
                    label="Email"
                    value={email}
                    text="email"
                    onChange={(e)=>setEmail(e.target.value)}
                    fullWidth={ true }
                    sx={{ mb: 3 }}
  
                />
              <TextField
                    required
                    id="password"
                    name="password"
                    label="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    type="password"
                    fullWidth={ true }
                    sx={{ mb: 3}}
            
                />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                    <Link component={RouterLink} to="/ForgotPassword">
                        Forgot Password
                    </Link>
                </Grid>
                <Grid item>
                    <Link component={RouterLink} to="/Register">
                        Don't have an account? Sign Up
                    </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
          </Box>
        </Grid>
      </Grid>

  );
}