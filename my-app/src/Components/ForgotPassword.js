import React from "react"
import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    Grid,
    Link,
    Box
  } from '@mui/material';

import {  Link as RouterLink } from "react-router-dom";

function ForgotPassword(){
    return (
    <Container maxWidth="xs">
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            flexDirection = "column"
        >
        <Paper elevation={24} style={{ padding: '20px' }}>
            <Typography component="h1" variant="h4" sx={{ color:"#00237B", fontWeight: "bold" }}>
                Forgot Password
            </Typography>
            <Typography sx={{ color:"#00237B", fontSize: "12px"}}>
                Please enter your email address. You will receive a link to create a new password
            </Typography>
            <form>
            <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                required
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
            >
                Reset Password
            </Button>
            </form>
            <Grid container justifyContent="center">
            <Grid item  sx={{mt:1}}> 
                <Link component={RouterLink} to="/Login" variant="body2">
                Back to Login
                </Link>
            </Grid>
            </Grid>
        </Paper>
      </Box>
    </Container>
  );

}
export default ForgotPassword;